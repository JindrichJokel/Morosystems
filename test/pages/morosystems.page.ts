// test/pages/morosystems.page.ts
class MoroSystemsPage {
    get aboutUsLink() {
        return $('a[href="/o-nas/"]'); // Selector for the 'O nás' link
    }

    get careerLink() {
        return $('a[href="/kariera/"]'); // Selector for the 'Kariéra' link
    }

    get mainElement() {
        return $('#main'); // Selector for the <main> element with ID 'main'
    }

    async goToCareerPage() {
        // Hover over the 'O nás' link
        await browser.waitUntil(async () => await this.aboutUsLink.isDisplayed(), {
            timeout: 10000, 
            timeoutMsg: 'O nás link not found'
        });
        await this.aboutUsLink.moveTo(); // Simulate mouse hover over 'O nás'

        // Wait for the 'Kariéra' link to appear and click on it
        await browser.waitUntil(async () => await this.careerLink.isDisplayed(), {
            timeout: 10000, 
            timeoutMsg: 'Kariéra link not found'
        });
        await this.careerLink.click();

        // Verify that the URL is correct
        await browser.waitUntil(async () => (await browser.getUrl()).includes('/kariera'), {
            timeout: 10000, 
            timeoutMsg: 'Not on the Kariéra page'
        });
    }

    async isMainElementDisplayed() {
        return await this.mainElement.isDisplayed();
    }
}

export default new MoroSystemsPage();
