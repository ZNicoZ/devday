
(async () => {
    const testCase = new TestCase("Memes");
    const screen = new Region();
    const env = new Environment();
    env.setSimilarity(0.82);
    const max = 66000;
    
    async function waitForElement(element, timeout) {
        await _wait(timeout, () => _isVisible(element));
    }
    try {
        async function highlightClick(element) {
            await _highlight(element);
            await _click(element);
        }
        await _navigateTo("https://imgflip.com/memegenerator/74454246/Beach-Testing-3");
        await waitForElement(_textarea("mm-text"), max); 

        const testMate = new Application("/Applications/TextMate.app");
        testMate.open();

        const textFields = await _collect("_textarea", "mm-text");
        await _setValue(textFields[0], "Testing");
        await _setValue(textFields[1], "Lazy Ass");

        await _click(_div("Generate"));

        await waitForElement(_textbox("img-code link"), max);
        let urlMeme = "";
        urlMeme = await _getValue(_textbox("img-code link"));

        
        await _wait(5000);
        // let navEl = _listItem("nav-item dropdown nav-item-201");
        // await highlightClick(navEl);
        // await highlightClick(_listItem(0, _in(navEl)));
        // await _highlight(_byXPath('//img[@title="Sakuli"]'));
        // await _highlight(_heading2(/Zur Sakuli Produktseite/));
        // //await _focus(_div("card card-type1"))
        // await _highlight(_div("card card-type1[0]"));
        // await _highlight(_div("card card-type1[1]"));
        // await _highlight(_div("card card-type1[2]"));
        // await highlightClick(_heading3("10-Schritte-Guide für End-to-End-Monitoring"));

        // await _navigateTo("https://sakuli.io/wp");

        // const mainWindow = driver.getWindowHandle();
        // const tabs = driver.getAllWindowHandles();
        // driver.switchTo().window(mainWindow);

        // await highlightClick(_button("I agree"));
        // //await highlightClick(_italic("fas fa-download"));
        // //todo check for file on file system in container!
        // await highlightClick(_link(/Contact/));
        // await _setSelected(_select("powermail_field_salutation"), "Mrs.");
        // await _setValue(_textbox("powermail_field_firstname"), "Henriette");
        // await _setValue(_textbox("powermail_field_name"), "Kette");


        // await _setValue(_emailbox("powermail_field_email"), "h.kette@thisIsNotADomain.wuxi");
        // await _focus(_textbox("powermail_field_phone"));
        // await env.type("089 / 3993 555 98112");


        // await _setValue(_textbox("powermail_field_company"), "Consol GmbH");
        // await _setValue(_textarea("powermail_field_mitteilung"), "Hallo, ich würde gerne mehr über Ihr Produkt erfahren, bitte kontaktieren Sie mich. H.Kette");

        // await _check(_checkbox("powermail_field_datenschutz_1"));
        // await _highlight(_button("Send"));
        // await _click(_button("× Close"));
        // //*[@id="c3616"]/div/div[1]/div/div/figure/div/picture/img
        // // await highlightClick(_link(/E2E Testing/));


































        // if (await _exists(_div("gdpr-info-box")) && await _exists(_link("Learn more", _in(_div("gdpr-info-box"))))) {
        //     await highlight(_div("gdpr-info-box"));
        //     await focusClick(_link("Learn more", _in(_div("gdpr-info-box"))));
        //     if (await _exists(_div("csc-textpic-text"))){
        //         await highlight(_div("csc-textpic-text"));
        //         await testCase.endOfStep("GDPR Content is visible");
        //     }else{
        //         await testCase.endOfStep("GDPR Content couldn´t be fetched or rendered");
        //     }
        //     await focusClick(_button("Close"));
        //     await highlight(_button("I agree"));
        //     await focusClick(_button("I agree"));
        //     await testCase.endOfStep("Accepted Cookies");
        // }else{
        //     await testCase.endOfStep("Cookie banner did not show up!");
        // }
        // await _highlight(_div("hero__image"),6000);
        // await highlight(_link("Legal Notice"));
        // await focusClick(_link("Legal Notice"));
        // if (await _exists(_heading2("address"))){
        //     await highlight(_heading2("address"));
        //     await testCase.endOfStep("Legal notice content fetched and displayed.");
        // }else{
        //     await testCase.endOfStep("Legal notice content couldn´t be fetched or rendered.");
        // }
        // await _navigateTo(url);
        // await screen.mouseWheelUp(10);
        // await screen.find("getting.png").then(target=>target.click());
        // await testCase.endOfStep("Getting Started opened.")
        // await highlight(_code("npm init"));
        // await testCase.endOfStep("Code component found.")
        // await _navigateTo(url);
        // await highlight(_link("button[1]"));
        // await focusClick(_link("button[1]"));
        // await highlight(_heading1("Testing"));
        // await testCase.endOfStep("Opened Testing page.");
        // await _navigateTo(url);
        // await highlight(_link("button[2]"));
        // await focusClick(_link("button[2]"));
        // await highlight(_heading1(/Monitoring/));
        // await testCase.endOfStep("Opened Monitoring page.");
        // await _navigateTo(url);
        // await highlight(_link("button[3]"));
        // await focusClick(_link("button[3]"));
        // await highlight(_heading1(/RPA/));
        // await testCase.endOfStep("Opened RPA page.");

        // await _navigateTo(url + "/enterprise");
        // await testCase.endOfStep("Opened Enterprise page.");
        // // if (await _exists(_link("Learn more"))) {
        // //     await highlight(_link("Learn more"));
        // //     await testCase.endOfStep("Cookie Banner found");
        // //     await highlight(_button("I agree"));
        // //     await focusClick(_button("I agree"));
        // // }else{
        // //     await testCase.endOfStep("No Cookie Banner found.");
        // // }
        // let links = await _collect("_link",/Request/);
        // await highlight(_list("price-table"));
        // await highlight(links[1]);
        // await focusClick(links[1]);
        // await highlight(_div("checkbox "));
        // await testCase.endOfStep("Contact form fetched and displayed.");
        // await _setSelected(_select("powermail_field_salutation"), "Mrs.");
        // await _setValue(_textbox("powermail_field_firstname"), "Test Vorname");
        // await _setValue(_textbox("powermail_field_name"), "Test Nachname");
        // await _setValue(_emailbox("powermail_field_email"), "Test@testuseryxyxyxyx.com");
        // await _setValue(_textbox("powermail_field_company"), "Test Company");
        // await _setValue(_textarea("powermail_field_mitteilung"), "Hello, this is a test message. Kind regards, The Sakuli.io Bot.");
        // await testCase.endOfStep("Contact form filled.");
        // await highlight(_button(/Close/));
        // await _click(_button(/Close/));
        // await testCase.endOfStep("Closed Contact Form.");

        // // await _wait(2000);
        // // //await env.type("P", Key.CMD);
        // // await env.keyDown(Key.CMD, Key.P);
        // // await env.keyUp(Key.CMD, Key.P);
        // // await _wait(5000);

        // // await screen.find("print_target_black.png").then(target=>target.click());

        // // await screen.find("print_as_pdf.png").then(target=>target.click());
        await _wait(4000);

    } catch (e) {
        await testCase.handleException(e);
    } finally {
        await testCase.saveResult();
    }
})().then(done); 


