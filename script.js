// 使用 Granim.js 创建渐变背景
var granimInstance = new Granim({
    element: '#granim-canvas',
    direction: 'diagonal',
    isPausedWhenNotInView: true,
    states: {
        "default-state": {
            gradients: [
                ['#2A196A', '#0F1533'],
                ['#35357C', '#0F0D0E']
            ],
            transitionSpeed: 7000
        }
    }
});
