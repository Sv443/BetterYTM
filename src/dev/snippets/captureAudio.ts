(() => {
  try {
    // Get the video element
    const videoElement = document.querySelector<HTMLVideoElement>("ytmusic-player video");

    if(!videoElement)
      throw new Error("Video element not found. Make sure you are on a YTM watch page.");

    // Create AudioContext
    const audioCtx = new AudioContext();
    const analyser = audioCtx.createAnalyser();

    // Configure analyser for better visualization
    analyser.fftSize = 2048;
    analyser.smoothingTimeConstant = 0.8;

    // Use Firefox-compatible method to capture stream
    const stream = "mozCaptureStream" in videoElement
      ? (videoElement.mozCaptureStream as () => MediaStream)() // @ts-expect-error idk why captureStream isn't in lib.dom.d.ts
      : (videoElement.captureStream as () => MediaStream)()

    const streamSource = audioCtx.createMediaStreamSource(stream);

    // Connect to analyzer only (without affecting audio output)
    streamSource.connect(analyser);

    // Create data arrays for both time and frequency domains
    const bufferLength = analyser.frequencyBinCount;
    const timeData = new Uint8Array(bufferLength);
    const freqData = new Uint8Array(bufferLength);

    // Make sure video is actually playing
    if (videoElement.paused)
      console.info("Note: Video is paused. Audio data may not be available until playing");

    // Create animation loop to continuously sample data
    const sampleAudioData = () => {
      // Get both waveform and frequency data
      analyser.getByteTimeDomainData(timeData);
      analyser.getByteFrequencyData(freqData);

      // Find non-silent samples to verify we have data
      const hasTimeData = !timeData.every(val => val === 128);
      const hasFreqData = !freqData.every(val => val === 0);

      console.info("Audio data captured:");
      console.info("- Time domain data available:", hasTimeData);
      console.info("- Frequency domain data available:", hasFreqData);

      if (!hasTimeData && !hasFreqData) {
        console.info("No audio data detected. Possible reasons:");
        console.info("- Audio is muted or very quiet");
        console.info("- Video is paused or buffering");
        console.info("- Current segment has no audio");
      } else {
        console.info("- Time domain samples:", timeData.slice(0, 10));
        console.info("- Frequency domain samples:", freqData.slice(0, 10));
      }
  
      // Continue sampling (or remove this for one-time check)
      requestAnimationFrame(sampleAudioData);
    };

    // Start sampling
    requestAnimationFrame(sampleAudioData);

    console.info("Audio analyzer successfully connected");

  } catch (error) {
    console.error("Audio analysis error:", error);
  }
})();
