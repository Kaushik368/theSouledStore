import {before,Given,When,And,Then} from "cypress-cucumber-preprocessor/steps"
///<reference types="@cypress/xpath"/>

//TC051
Given("open the men's page and verify the search bar",()=>{
    cy.visit("/")
    cy.wait(5000)
    cy.xpath("(//a[normalize-space()='MEN'])[1]").click();
    cy.contains("Allow").click()
})
When('verifing the search bar via screensort',()=>{
    
    cy.xpath("(//span[@class='fa fa-search icon search-btn-margin'])[1]").screenshot({ capture:"fullPage",padding:100, })
})

Then("Search Bar verified Successfully",()=>{
    cy.log("Verified Successfully")

})

//TC052
Given("open the men's page and validate the search bar",()=>{
    cy.visit("/")
    cy.wait(5000)
    cy.xpath("(//a[normalize-space()='MEN'])[1]").click();
    cy.contains("Allow").click()
})
When('validate the search bar using an input data',()=>{
    
    cy.get(".search-wrapper").trigger('mousemove')
    cy.wait(3000)
    cy.xpath("(//input[@id='search'])[1]").type("marvel",{force:true})
    cy.get('.fa-search').click()
    cy.url().should('include','/search?q=marvel')
;    
})

Then("Search Bar validated Successfully",()=>{
    cy.log("Validated Successfully")

})

//TC053
Given("open the searched page by products",()=>{
    cy.visit("https://www.thesouledstore.com/search?q=marvel")
    cy.wait(5000)
    cy.contains("Allow").click()
})
When('verifing the filter via screensort',()=>{
    
    cy.xpath("(//div[@class='filtersection'])[1]").screenshot({ capture:"fullPage",padding:200 })
})

Then("filter section verified Successfully",()=>{
    cy.log("Verified Successfully")

})

//TC055
Given("open the searched page by theme",()=>{
    cy.visit("https://www.thesouledstore.com/search?q=marvel")
    cy.wait(5000)
    cy.contains("Allow").click()
})
When('verifing the filter 2 via screensort',()=>{
    cy.xpath("(//a[normalize-space()='Themes'])[1]").click();
    cy.xpath("(//a[normalize-space()='Themes'])[1]").screenshot({ capture:"fullPage",padding:200 })
})

Then("filter 2 section verified Successfully",()=>{
    cy.log("Verified Successfully")

})

//TC057
Given("open the searched page by size",()=>{
    cy.visit("https://www.thesouledstore.com/search?q=marvel")
    cy.wait(5000)
    cy.contains("Allow").click()
})
When('verifing the filter 3 via screensort',()=>{
    cy.xpath("(//a[normalize-space()='Size'])[1]").click()
    cy.wait(5000)
    cy.xpath("(//a[normalize-space()='Size'])[1]").screenshot({ capture:"fullPage",padding:200 })
})

Then("filter 3 section verified Successfully",()=>{
    cy.log("Verified Successfully")

})

//TC059
Given("open the searched page by color",()=>{
    cy.visit("https://www.thesouledstore.com/search?q=marvel")
    cy.wait(5000)
    cy.contains("Allow").click()
})
When('verifing the filter 4 via screensort',()=>{
    cy.xpath("(//a[normalize-space()='Colors'])[1]").click()
    cy.xpath("(//a[normalize-space()='Colors'])[1]").screenshot({ capture:"fullPage",padding:200 })
})

Then("filter 4 section verified Successfully",()=>{
    cy.log("Verified Successfully")

})

//TC061
Given("open the searched page by sorting",()=>{
    cy.visit("https://www.thesouledstore.com/search?q=marvel")
    cy.wait(5000)
    cy.contains("Allow").click()
})
When('verifing the sorting via screensort',()=>{
    
    cy.xpath("(//a[normalize-space()='sort'])[1]").click();
    cy.wait(3000)
    cy.xpath("(//a[normalize-space()='sort'])[1]").should("have.text",'sort ')
    cy.xpath("(//a[normalize-space()='sort'])[1]").screenshot({ capture:"fullPage",padding:100 })
})

Then("sorting section verified Successfully",()=>{
    cy.log("Verified Successfully")

})

//TC063
Given("open the searched page by clear button",()=>{
    cy.visit("https://www.thesouledstore.com/search?q=marvel")
    cy.wait(5000)
    cy.contains("Allow").click()
})
When('verifing the clear button via screensort',()=>{
    
    cy.xpath("(//button[@type='button'][normalize-space()='Clear'])[2]").click();
    cy.wait(3000)
    cy.xpath("(//button[@type='button'][normalize-space()='Clear'])[2]").should("have.text",'Clear')
    cy.xpath("(//button[@type='button'][normalize-space()='Clear'])[2]").screenshot({ capture:"fullPage",padding:100 })
})

Then("clear button section verified Successfully",()=>{
    cy.log("Verified Successfully")

})