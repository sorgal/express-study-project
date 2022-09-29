router.get('/', (req, res) => {
    res.render('index', {
        title: 'Главная',
    })
});

module.exports = router;