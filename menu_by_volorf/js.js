const sel = (target) => { return document.getElementsByClassName(target)},
    btn_list = sel('btn_list')[0],
    text_list = sel('text_list')[0],
    btn_outline = sel('btn_outline')[0],
    cycle = sel('cycle')[0];

const btn_motion = {

    textRotate: () => {
        let deg = Number(text_list.getAttribute('data-rotate')) + 90;
        text_list.setAttribute('data-rotate', deg);
        text_list.style.transform = 'rotate(' + deg + 'deg)';
        console.log('textRotate : ', deg);
    },
    clickMotion: () => {
        console.log('clickMotion');
        cycle.classList.add(active);
    },
    buttonMotion: () => {
        console.log('buttonMotion');
        btn_outline.classList.add('action');
    },
    reset: () => {
        // 시간별로 설정하여 각 모션이 끝나는  즉 active 클래스 삭제하는 함수 선언 필요

    },
    run: () => {
        btn_motion.textRotate();
        btn_motion.clickMotion();
        btn_motion.buttonMotion();
    },
}


btn_list.addEventListener('click', btn_motion.run);

btn_outline.addEventListener('transitionend', (event) => {
    btn_outline.classList.remove('action');
    // event.preventDefault();
    // event.stopImmediatePropagation();
    // event.stopPropagation();
    console.log('animation end');
    // transitionend  이벤트가 3번 발생한다. 
    // 어떻게 하면 깔끔하게 할수 있을지..
})


/***********************************/
// 일단 아래 내용 킾해두고 공부하자
// https://codepen.io/jjeaton/pen/bzolH?editors=1111


