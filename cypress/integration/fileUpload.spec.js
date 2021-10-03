describe('working with file upload plugin',()=>{
    it('file upload',()=>{
        cy.visit('http://cgi-lib.berkeley.edu/ex/fup.html');
        const fileName='demoData.xlsx';
        cy.fixture(fileName).then(fileContent=>{
            cy.get('[type="file"]').attachFile({fileContent,fileName,mimeType:'application/xlsx'});
        })
        cy.get('[type="submit"]').click();
        cy.contains("File Upload Results");
    })
})