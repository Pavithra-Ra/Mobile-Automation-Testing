describe('addNoteDemo', () => {

    it('Test case for addNoteDemo', async () => {

        await browser.pause(10000);
        const skip = await $("//*[@text='SKIP']")
        // To Validate the Skip to be Displayed or not
        await expect(skip).toBeDisplayed()
        await skip.click()
        await ($('//*[@text="Add note"]')).click();
        // To Validate the Text to be Clickable or not
        expect($('//*[@text="Text"]')).toBeClickable()
        await $('//*[@text="Text"]').click()
        await $("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/edit_note']").setValue('Today, I have to complete my task');
        await $("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/back_btn']").click();
        // To Validate the element have same Text 
        const validateText = await $('//*[@text="Today, I have to complete my task"]')
        await expect(validateText).toHaveText('Today, I have to complete my task')
        await validateText.click();
        await $("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/menu_btn']").click();
        await ($('//*[@text="Delete"]')).click();
        // To Validate the OK Button to be Clickable
        expect($('//*[@text="OK"]')).toBeClickable()
        await ($('//*[@text="OK"]')).click();
        await $('/hierarchy/android.widget.FrameLayout/android.view.View').click()
        await browser.pause(10000);

    });

});