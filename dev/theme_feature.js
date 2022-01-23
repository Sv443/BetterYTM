//# SECTION theme

// /**
//  * Applies the set theme color
//  */
// function applyTheme()
// {
//     const formatRegex = /^(\d{3}){1,2}$/;

//     const color = features.themeColor.match(formatRegex) ? `#${color}` : color;

//     /**
//      * A list of changes to be made to the page to apply the theme color
//      */
//     const themeChanges = [
//         {
//             elem: document.querySelector("#progressContainer > #primaryProgress"),
//             prop: "background",
//             important: false,
//         },
//         {
//             elem: document.querySelector(),
//             prop: "",
//             important: false,
//         },
//         {
//             elem: document.querySelector(),
//             prop: "",
//             important: false,
//         },
//     ];

//     themeChanges.forEach(change => {
//         if(change.elem)
//         {
//             const value = change.important === true ? `${color} !important` : color;

//             change.elem.style[change.prop] = value;
//         }
//     });
// }