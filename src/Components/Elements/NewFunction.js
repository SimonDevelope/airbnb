import React from 'react';
import '../ElementsStyle/NewFunction.css';

function Setting () {
    return (
        <div className='Common-Contents-style'>
            <div>
                <div>
                    <div className='To-be-host-total-view-wrapper'>
                        <a
                        href='/'
                        className='To-be-host-address-wrapper'
                        >
                            <div className='To-be-host-total-image-view'>
                                <picture>
                                    <source
                                    srcSet='https://a0.muscache.com/im/pictures/2595054e-d1d9-4fde-8046-58d51fcb3164.jpg?im_w=1440'
                                    ></source>
                                    <img
                                    src='https://a0.muscache.com/im/pictures/791aba62-2de8-4722-99b5-45838715eb34.jpg?im_q=medq&im_w=720'
                                    alt='https://a0.muscache.com/im/pictures/791aba62-2de8-4722-99b5-45838715eb34.jpg?im_q=medq&im_w=720'
                                    className='To-be-host-image-attr'
                                    ></img>
                                </picture>
                            </div>
                            <div className='Inner-word-total-wrapper'>
                                <div className='title-outter-wrapper'>
                                    <span className='title-font-attr'>호스팅 시작하기</span>
                                </div>
                                <div className='contents-outter-wrapper'>
                                    <span>숙소를 공유하여 부수입을 올리고 새로운 가능성을 만나세요.</span>
                                </div>
                                <div className='more-contents-btn-wrapper'>
                                    <button 
                                    type='button'
                                    className='Contents-button-attr'
                                    >
                                        <span className='Contents-button-inner-word-attr'>자세히 알아보기</span>
                                    </button>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Setting;