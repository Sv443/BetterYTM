/** Parses a video time string in the format `[hh:m]m:ss` to the equivalent number of seconds - returns 0 if input couldn't be parsed */
function parseVideoTime(videoTime: string) {
  const matches = /^((\d{1,2}):)?(\d{1,2}):(\d{2})$/.exec(videoTime);
  if(!matches)
    return 0;

  const [, , hrs, min, sec] = matches as unknown as [string, string | undefined, string | undefined, string, string];

  let finalTime = 0;
  if(hrs)
    finalTime += Number(hrs) * 60 * 60;
  finalTime += Number(min) * 60 + Number(sec);

  return isNaN(finalTime) ? 0 : finalTime;
}

void [parseVideoTime];
