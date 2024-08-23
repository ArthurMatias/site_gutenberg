document.getElementById('hovered_plans1').addEventListener('mouseenter', function() {
    document.getElementById('hovered_plans2').classList.add('hovered');
});

document.getElementById('hovered_plans1').addEventListener('mouseleave', function() {
    document.getElementById('hovered_plans2').classList.remove('hovered');
});