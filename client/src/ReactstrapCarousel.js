import React, {Component} from 'react';
import {UncontrolledAlert, UncontrolledCarousel} from 'reactstrap';

const items=[
    {
        src:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAxMTZfMjEz%2FMDAxNjEwNzk4ODE5OTk2.7zMc0SLtNDbKexacALJ_qdB2zsepYzJwJ8KbwNtGNuAg.PcfrUmlhuEY_tmPUyfduDBn3J3_O6LAx_MyYXH3feokg.JPEG.cocoma1177%2FIMG_7473.jpg&type=a340'
        , altText: ' 슬라이드1 이미지 대체 문구',
        caption : ' 슬라이드1 설명',
        header: ' 슬라이드1 제목'
    },
    {
        src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fpost.phinf.naver.net%2FMjAyMTAzMTFfMjIy%2FMDAxNjE1NDQ0ODc2MDAw.QiXyMX9lewGTwuhwJHoEGvyxZlVb2SS7y8fVO7pcGXUg.gPz2Y-hijVDk5SSJmmIOYN38ICzsTPb6yAle19mN0DIg.JPEG%2FIKHgwwNS_lA23JlefjvF_BOCGuEM.jpg&type=a340'
        , altText: ' 슬라이드2 이미지 대체 문구',
        caption : ' 슬라이드2 설명',
        header: ' 슬라이드2 제목'
    },
    {
        src:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAzMDRfMjgx%2FMDAxNjE0ODMyNzE2Mzk2.8yrQzXs078jFGwsEXlOQ4IO_eWGGIAv84CjE7WiXj00g.WQTjN541qxCm1vW4uvglJO_WP9O02jvxRFcJk3pIs1kg.JPEG.herodkr%2F1B9A0430_%25C0%25DB%25BE%25F7.jpg&type=a340'
        , altText: ' 슬라이드3 이미지 대체 문구',
        caption : ' 슬라이드3 설명',
        header: ' 슬라이드3 제목'
    }
];

class ReactstrapCarousel extends Component{
    render(){
        return(
            <UncontrolledCarousel items={items}/>
        )
    }
}

export default ReactstrapCarousel;