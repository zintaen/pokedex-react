import React from "react";

import styles from "./main.module.scss";

function MainLayout({ children }) {
    return <div className={styles.container}>{children}</div>;
}

export default MainLayout;
