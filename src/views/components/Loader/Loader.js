import { useState } from "react";
import { Wrapper } from "./styles";

const Loader = ({topColor, sideColor}) => {
    return (
        <Wrapper topColor={topColor} sideColor={sideColor} />
    );
}
 
export default Loader;