describe('home page', () => {

    beforeEach( () =>{
      cy.visit("http://localhost:3000")
    })
context("Hero section", () =>{


    it(" the h1 contains the correct text", () => {
    cy.getByData("hero-heading").contains(
      "Testing Next.js Applications with Cypress")
  })

  it("the features on the homepage are correct", () =>{
    cy.visit("http://localhost:3000")
    cy.get("dt").eq(0).contains("4 Courses")
    cy.get("dt").eq(1).contains("25+ Lessons")
    cy.get("dt").eq(2).contains("Free and Open Source")
  })
        /*it("the picture on the homepage are correct", () =>{
          cy.visit("http://localhost:3000")
          cy.get(".mx-auto > .w-full")
        })*/
})
context("Courses section", () =>{
  it("Course: Testing your first Next.js application ", ()=>{
cy.getByData("course-0").find("a").contains("Get started").click()
cy.location("pathname").should("equal", "/testing-your-first-application")
})
})
 it("course: Testing Foundations", () =>{
  cy.getByData("course-1").find("a").contains("Get started").click()
  cy.location("pathname").should("equal", "/testing-foundations")
 })
 it("course: Cypress Fundamentals",() =>{
  cy.getByData("course-2").find("a").contains("Get started").click()
  cy.location("pathname").should("equal","/cypress-fundamentals")
 })
}) 