import { useLayoutEffect } from 'react';
import useResponsive from '../../hooks/useResponsive';
import styles from './HorizontalSpacer.module.scss';

function HorizontalSpacer({desktopSize, mobileSize = 0 }){
    const {isDesktop} = useResponsive();
    
    return (
        <div style={{height: isDesktop ? `${desktopSize}px` : `${mobileSize}px`}}></div>
    )
}

export default HorizontalSpacer
