/**
 * @author mlewand
 * @see https://gist.github.com/mlewand/56237c19050d27f61b807ed384dff2db
 * 
 * A helper function to visualize DOMRect or set of DOMRect instances.
 * 
 * Subsequent calls will remove previously marked elements.
 * 
 *     Debug a element currently focused in your devtools inspector.
 *     window.markRect( $0.getBoundingClientRect() );
 *     // Debug a selection.
 *     window.markRect( document.getSelection().getRangeAt( 0 ).getClientRects() );
 * 
 * 
 * Original source: https://gist.github.com/mlewand/56237c19050d27f61b807ed384dff2db
 * Updated by [Sv443](https://github.com/Sv443)
 * 
 * Styling example:
 * ```js
 * const [ mark ] = window.markRect(new DOMRect());
 * markElem.style.backgroundColor = "red";
 * ```
 */
( () => {
    const drawnRect = [];

    const createRectDraw = () => {
        const ret = document.createElement( 'div' );
        ret.style.position = 'absolute';
        ret.style.outline = '2px solid red';
        ret.classList.add('debug-rect-marker');
        document.body.appendChild( ret );

        return ret;
    };

    /**
     * Creates an element that marks the passed DOMRectangle(s)  
     * These elements get the class `debug-rect-marker`
     * @param {DOMRect|DOMRect[]} rectangles Accepts a DOMRectangle or an array of them
     * @returns {HTMLElement[]} Returns array of marker elements
     */
    const markRect = ( rectangles ) => {
        const marks = [];

        // Cleanup.
        drawnRect.forEach( ( oldRect ) => oldRect.remove() );

        // Unify format.
        if ( !Array.isArray(rectangles) ) {
            rectangles = [ rectangles ];
        }

        rectangles.forEach( ( rect ) => {
            const curDrawing = createRectDraw(),
                dims = [ 'top', 'left', 'width', 'height' ];

            dims.forEach( ( property ) => {
                curDrawing.style[ property ] = `${rect[ property ]}px`;
            } );

            console.info( 'created debug rect:', curDrawing );

            drawnRect.push( curDrawing );
            marks.push( curDrawing );
        } );

        return marks;
    };

    /**
     * Deletes all rectangles that have been previously created
     * @returns {void}
     * @author Sv443
     */
    const deleteRects = () => {
        const markers = document.querySelectorAll(".debug-rect-marker");

        markers.forEach(elem => {
            elem.innerHTML = "";
            elem.outerHTML = "";
        });

        console.warn(`Deleted ${markers.length} markers`);
    };


    window.markRect = markRect;

    window.deleteRects = deleteRects;
} )();