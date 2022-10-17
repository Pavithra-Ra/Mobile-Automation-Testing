describe("Fisrt Test Case",() => {
    it("API Demo Sample", async ()=>{
    
       await $('~App').click();
        expect($('~Activity')).toBeClickable()
        await ($('~Activity')).click();
    });
    
})
