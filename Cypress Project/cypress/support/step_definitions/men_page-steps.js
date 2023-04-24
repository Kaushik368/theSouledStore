import {before,Given,When,And,Then} from "cypress-cucumber-preprocessor/steps"
///<reference types="@cypress/xpath"/>


// TC035
Given("open the men's page and verify the carousel",()=>{
    cy.visit("/")
    cy.wait(5000)
    cy.xpath("(//a[normalize-space()='MEN'])[1]").click();
    cy.contains("Allow").click()
})
When('verifing the carousel button via screensort',()=>{
    cy.wait(5000)
    cy.xpath("(//button[@aria-label='Next page'])[1]").screenshot({ capture:"fullPage",padding:500, })
})
Then("Carousel buttons verified Successfully",()=>{
    cy.log("Verified Successfully")
})

//TC036
Given("open the men's page and validate the carousel",()=>{
    cy.visit("/")
    cy.wait(5000)
    cy.xpath("(//a[normalize-space()='MEN'])[1]").click();
    cy.contains("Allow").click()
})
When('validate the next button on carousel',()=>{
    cy.xpath("(//button[@aria-label='Next page'])[1]").click();
    cy.xpath("(//button[@aria-label='Next page'])[1]").should('be.visible')
})
And('validate the previous button on carousel',()=>{
    cy.xpath("(//button[@class='VueCarousel-navigation-button VueCarousel-navigation-prev'])[1]").click();
    cy.xpath("(//button[@class='VueCarousel-navigation-button VueCarousel-navigation-prev'])[1]").should('be.visible')
})
Then("Carousel functionality verified Successfully",()=>{
    cy.log("Validated Successfully")

})

// TC037
Given("open the men's page and verify the carousel picture",()=>{
    cy.visit("/")
    cy.wait(5000)
    cy.xpath("(//a[normalize-space()='MEN'])[1]").click();
    cy.contains("Allow").click()
})
When('verifing the carousel via screensort',()=>{
    
    cy.wait(5000)
    cy.xpath("(//div[@class='VueCarousel-wrapper'])[1]").first().screenshot({ capture:"fullPage",padding:140, })
})
Then("Carousel picture verified Successfully",()=>{
    cy.log("Verified Successfully")
})

//TC038
Given("open the men's page and validate the carousel picture",()=>{
    cy.visit("/")
    cy.wait(5000)
    cy.xpath("(//a[normalize-space()='MEN'])[1]").click();
    cy.contains("Allow").click()
})
When('validate if the pictures are clickable or not',()=>{
    cy.xpath("(//button[@aria-label='Next page'])[1]").click();
    cy.xpath("(//div[@class='VueCarousel-wrapper'])[1]").click();
    cy.wait(5000)
    cy.url().should('include','/footwear')
    cy.wait(5000)
    cy.go('back')
})

Then("Carousel clickable functionality verified Successfully",()=>{
    cy.log("Validated Successfully")

})

//TC039
Given("open the men's page and verify the Collections Section",()=>{
    cy.visit("/")
    cy.wait(5000)
    cy.xpath("(//a[normalize-space()='MEN'])[1]").click();
    cy.contains("Allow").click()
})
When('verify if the Section is available',()=>{
    cy.contains("COLLECTIONS").invoke('text').then((text)=>{
        cy.log(text);
    })
})

Then("Collections verified Successfully",()=>{
    cy.log("Verified Successfully")

})

//TC040
Given("open the men's page and validate the Collections Section",()=>{
    cy.visit("/")
    cy.wait(5000)
    cy.xpath("(//a[normalize-space()='MEN'])[1]").click();
    cy.contains("Allow").click()
})
When('validate if the pictures on the Section are clickable or not',()=>{
    cy.wait(5000)
    cy.xpath("(//img[@title='men/boxer-shorts'])[1]").click();
    cy.wait(5000)
    cy.url().should('include','/men/boxer-shorts')
    cy.wait(5000)
    cy.go('back')
})

Then("Collections clickable functionality verified Successfully",()=>{
    cy.log("Validated Successfully")

})

//TC041
Given("open the men's page and verify the Categories Section",()=>{
    cy.visit("/")
    cy.wait(5000)
    cy.xpath("(//a[normalize-space()='MEN'])[1]").click();
    cy.contains("Allow").click()
})
When('verify if the categories Section is available',()=>{
    cy.xpath("(//span[normalize-space()='Categories'])[1]").invoke('text').then((text)=>{
        cy.log(text);
    })
})

Then("Categories verified Successfully",()=>{
    cy.log("Verified Successfully")

})

//TC042
Given("open the men's page and validate the Categories Section",()=>{
    cy.visit("/")
    cy.wait(5000)
    cy.xpath("(//a[normalize-space()='MEN'])[1]").click();
    cy.contains("Allow").click()
})
When('validate if the pictures on the categories Section are clickable or not',()=>{
    cy.wait(5000)
    cy.xpath("(//img[@id='vests'])[10]").click();
    cy.wait(5000)
    cy.url().should('include','/men/tank-tops-and-vests')
    cy.wait(5000)
    cy.go('back')
})

Then("Categories clickable functionality verified Successfully",()=>{
    cy.log("Validated Successfully")

})

//TC043
Given("open the men's page and verify the Official Merchandise Section",()=>{
    cy.visit("/")
    cy.wait(5000)
    cy.xpath("(//a[normalize-space()='MEN'])[1]").click();
    cy.contains("Allow").click()
})
When('verify if the official merchandise Section is available',()=>{
    cy.contains("Official Merchandise").invoke('text').then((text)=>{
        cy.log(text);
    })
})

Then("Official Merchandise verified Successfully",()=>{
    cy.log("Verified Successfully")

})

//TC044
Given("open the men's page and validate the Official Merchandise Section",()=>{
    cy.visit("/")
    cy.wait(5000)
    cy.xpath("(//a[normalize-space()='MEN'])[1]").click();
    cy.contains("Allow").click()
})
When('validate if the pictures on the official merchandise Section are clickable or not',()=>{
    cy.wait(5000)
    cy.xpath("(//img[@title='artists/dc-justice-league-official-merchandise'])[1]").click();
    cy.wait(5000)
    cy.url().should('include','/artists/dc-justice-league-official-merchandise')
    cy.wait(5000)
    cy.go('back')
})

Then("Official Merchandise clickable functionality verified Successfully",()=>{
    cy.log("Validated Successfully")

})

//TC045
Given("open the men's page and verify the Top Selling Section",()=>{
    cy.visit("/")
    cy.wait(5000)
    cy.xpath("(//a[normalize-space()='MEN'])[1]").click();
    cy.contains("Allow").click()
})
When('verify if the Top Selling Section is available',()=>{
    cy.contains("Top Selling").invoke('text').then((text)=>{
        cy.log(text);
    })
})

Then("Top Selling verified Successfully",()=>{
    cy.log("Verified Successfully")

})

//TC046
Given("open the men's page and validate the Top Selling Section",()=>{
    cy.visit("/")
    cy.wait(5000)
    cy.xpath("(//a[normalize-space()='MEN'])[1]").click();
    cy.contains("Allow").click()
})
When('validate if the pictures on the Top Selling Section are clickable or not',()=>{
    cy.wait(5000)
    cy.xpath("(//img[@title='Black Panther: Wakanda Forever undefined at The Souled Store'])[1]").click();
    cy.wait(5000)
    cy.url().should('include','/product/black-panther-wakanda-forever-oversized-jersey?gte=1')
    cy.wait(5000)
    cy.go('back')
})

Then("Top Selling clickable functionality verified Successfully",()=>{
    cy.log("Validated Successfully")

})

//TC047
Given("open the men's page and verify the Membership Section",()=>{
    cy.visit("/")
    cy.wait(5000)
    cy.xpath("(//a[normalize-space()='MEN'])[1]").click();
    cy.contains("Allow").click()
})
When('verify if the Membership Section is available',()=>{
    cy.contains("Membership").invoke('text').then((text)=>{
        cy.log(text);
    })
})

Then("Membership verified Successfully",()=>{
    cy.log("Verified Successfully")

})

//TC048
Given("open the men's page and validate the Membership Section",()=>{
    cy.visit("/")
    cy.wait(5000)
    cy.xpath("(//a[normalize-space()='MEN'])[1]").click();
    cy.contains("Allow").click()
})
When('validate if the picture on the Membership Section is clickable or not',()=>{
    cy.wait(5000)
    cy.xpath("(//img[@alt='exclusive'])[1]").click();
    cy.wait(5000)
    cy.url().should('include','/membership')
    cy.wait(5000)
    cy.go('back')
})

Then("Membership clickable functionality verified Successfully",()=>{
    cy.log("Validated Successfully")

})

//TC049
Given("open the men's page and verify the Straight Out of Celebrity Closets Section",()=>{
    cy.visit("/")
    cy.wait(5000)
    cy.xpath("(//a[normalize-space()='MEN'])[1]").click();
    cy.contains("Allow").click()
})
When('verify if the Straight Out of Celebrity Closets Section is available',()=>{
    cy.xpath("(//h3[normalize-space()='Straight Out Of Celebrity Closets'])[1]").invoke('text').then((text)=>{
        cy.log(text);
    })
})

Then("Straight Out of Celebrity Closets verified Successfully",()=>{
    cy.log("Verified Successfully")

})

//TC050
Given("open the men's page and validate the Straight Out of Celebrity Closets Section",()=>{
    cy.visit("/")
    cy.wait(5000)
    cy.xpath("(//a[normalize-space()='MEN'])[1]").click();
    cy.contains("Allow").click()
})
When('validate if the picture on the Straight Out of Celebrity Closets Section is clickable or not',()=>{
    cy.wait(5000)
    cy.xpath("(//img[@alt='/tags/hardik-pandya'])[1]").click();
    cy.wait(5000)
    cy.url().should('include','/hardik-pandya')
    cy.wait(5000)
    cy.go('back')
})

Then("Straight Out of Celebrity Closets clickable functionality verified Successfully",()=>{
    cy.log("Validated Successfully")

})

