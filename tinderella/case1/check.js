(async () => {
    const testCase = new TestCase("Tinderella");
    const screen = new Region();
    const env = new Environment();
    env.setSimilarity(0.82);
    const url = "https://tinder.com/?lang=de";
    const max = 10000; //max wait in milliseconds
    const myTelNo = "1726807916";

    async function waitForElement(element, timeout) {
        await _wait(timeout, () => _isVisible(element));
    }

    try {
        // ** Login needs SMS verification code
        // await _navigateTo(url);
        // await testCase.endOfStep("Navigation");
        // await waitForElement(_button("MIT DEINER TELEFONNUMMER ANMELDEN"), max);
        // await testCase.endOfStep("Mit Tel anmelden visible");

        // await _click(_button("MIT DEINER TELEFONNUMMER ANMELDEN"));
        // await testCase.endOfStep("Mit Tel anmelden click");

        // await waitForElement(_telephonebox("phone_number"), max);
        // await _setValue(_telephonebox("phone_number"), myTelNo);
        // await testCase.endOfStep("Tel input");

        // await waitForElement(_button("WEITER"), max);
        // await _click(_button("WEITER"));
        // await testCase.endOfStep("WEITER click");

        // //wait for user input SMS code and hitting WEITER
        // await _wait(45000);
        // //await _wait(50000, async () =>  ! await _isVisible(_button("WEITER")));

        // await waitForElement(_button("ZULASSEN"), max);
        // await _click(_button("ZULASSEN"));

        // await waitForElement(_button("ZULASSEN"), max);
        // await _click(_button("ZULASSEN"));

        // // await _setValue(_telephonebox("Fz($m) Va(m) Py(8px) Bdrs(4px)--ml Bgc($c-divider-lite)--ml Px(8px)--ml BdB--s Bdrs(0)--s Bdbc($c-secondary)--s Px(4px)--s Sq(48px) Sq(40px)--s Ta(c) Fw($bold) Mend(6px)[0]"), "1");
        // // await _setValue(_telephonebox("Fz($m) Va(m) Py(8px) Bdrs(4px)--ml Bgc($c-divider-lite)--ml Px(8px)--ml BdB--s Bdrs(0)--s Bdbc($c-secondary)--s Px(4px)--s Sq(48px) Sq(40px)--s Ta(c) Fw($bold) Mend(6px)[1]"), "9");



        // ** Workaround: login manually into browser, start test and switch to the browser...
        
        await env.sleep(5);
        for (let i = 0; i < 10; i++) {
            await env.sleep(1);
            Logger.logInfo("Profile # " + i);
            if (Math.random() > 0.999) {
                await env.sleep(30);
            }
            if (Math.random() > 0.2) {
                await env.type(Key.SPACE);
                await env.sleep(0.3);
                await env.type(Key.SPACE);
                await env.sleep(0.4);
                await env.type(Key.SPACE);
            }
            if (Math.random() > 0.4) {
                await env.type(Key.RIGHT);
                await env.sleep(Math.random());
            }
            if (Math.random() > 0.9) {
                await env.type(Key.LEFT);
                await env.sleep(Math.random());
            }
            await screen.find("like.png").then(target => target.click());
            await env.sleep(Math.random());
        }
        await _wait(3000);

    } catch (e) {
        await testCase.handleException(e);
    } finally {
        await testCase.saveResult();
    }
})().then(done); 