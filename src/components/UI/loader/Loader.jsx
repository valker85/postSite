import React from 'react'
// import ReactDOM from 'react-dom';
import classes from './Loader.module.css'

export default function Loader() {

    return(
      <div className={classes.loaderWrapper}>
          <div className={classes.ldsRipple}><div></div><div></div></div>
      </div>
    )
}

/////////////////////// or with Portal:
// ---------------
// But we have to add <div id="loader-root"></div> in index.html
// ---------------


// export default function Loader() {

//   return ReactDOM.createPortal(
//     <div className={classes.loaderWrapper}>
//         <div className={classes.ldsRipple}><div></div><div></div></div>
//     </div>,
//     document.getElementById('loader-root')
//   )
// }