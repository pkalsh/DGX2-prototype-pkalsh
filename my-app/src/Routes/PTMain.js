import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({

}));

export default function PTLocation() {
    return (
        <React.Fragment>
            <ul className="cbp-ig-grid">
                <li>
                    <Link href="/pt-coach">
                        <img className="img_byPT" src="../Images/coach.png" alt="img"></img>
                        <h3 className="cbp-ig-title">트레이너로 찾기</h3>
                        <span className="cbp-ig-category">트레이너들을 전문 분야별로 정렬하여<br></br> 정보를 얻어보세요.</span>
                    </Link>
                </li>
                <li>
                    <Link href="/PT_location/index.html">
                        <img className="img_byLocation" src="../Images/location.png" alt="img"></img>
                        <h3 className="cbp-ig-title">지도로 찾기</h3>
                        <span className="cbp-ig-category">가까운 위치의 휘트니스 센터부터<br></br> 지도로 찾아 트레이너 정보를 얻어보세요.</span>
                    </Link>
                </li>
            </ul>
        </React.Fragment>
    )
}