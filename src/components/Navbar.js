// import React from "react";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

// export default function Navbar(props) {
//   return (
//     <div className="navdiv">
//       <nav
//         className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} px-3`}
//       >
//         <Link className="navbar-brand" to="/">
//           {props.title}
//         </Link>
//         <button
//           class="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span class="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav">
//             <li className="nav-item active">
//               <Link className="nav-link" to="/">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/about">
//                 About
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/textform">
//                 Textform
//               </Link>
//             </li>
//           </ul>
//         </div>
//         <div className="form-check form-switch">
//           {" "}
//           <input
//             className="form-check-input"
//             type="checkbox"
//             role="switch"
//             id="flexSwitchCheckDefault"
//             onClick={props.changemode}
//           />
//           <label
//             className={`form-check-label text-${
//               props.mode === "light" ? "dark" : "light"
//             }`}
//             htmlFor="flexSwitchCheckDefault"
//           >
//             {`${props.mode === "light" ? "dark" : "light"} Mode`}
//           </label>
//         </div>
//       </nav>
//     </div>
//   );
// }

// Navbar.propTypes = {
//   title: PropTypes.string.isRequired,
// };

// Navbar.defaultProps = {
//   title: "set Title Here",
// };
