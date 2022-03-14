describe('browserGoogleSearchTest', () => {

    it('Quick Start Test', async () => {
        var i;
        for (i = 0; i < 5; i++) {
            await browser.url('https://www.google.com')
            let searchBar = await $('[name="q"]')
            await searchBar.click()
            await searchBar.setValue('Digital.ai')
            await browser.keys("\uE007")
        }
    })

})
