<template>
  <BvNavbar expand="lg" theme="dark" background-color="primary">
    <BvContainer type="fluid">
      <BvNavbarBrand>Navbar</BvNavbarBrand>
      <BvNavbarToggler></BvNavbarToggler>
      <BvNavbarCollapse>
        <BvNavbarNavList margin="e-auto b-2 b-lg-0">
          <BvNavItem>
            <BvNavLink active>Home</BvNavLink>
          </BvNavItem>
          <BvNavItem>
            <BvNavLink>Link</BvNavLink>
          </BvNavItem>
          <BvNavItem>
            <BvNavLink disabled>Disabled</BvNavLink>
          </BvNavItem>
        </BvNavbarNavList>
        <BvForm flex role="search">
          <BvFormInput margin="e-2" type="search" placeholder="Search"></BvFormInput>
          <BvButton button="outline-success" type="submit">Search</BvButton>
        </BvForm>
      </BvNavbarCollapse>
    </BvContainer>
  </BvNavbar>
  <BvNavbar sticky shadow expand="lg" theme="light" background-color="light" style="--bs-bg-opacity: .5;">
    <BvContainer type="fluid">
          <BvButton
      button="primary"
      toggle="collapse"
      target="#collapseWidthExample"
    >Button with data-bs-target</BvButton>
    </BvContainer>
  </BvNavbar>
  <BvDiv flex>
    <BvCollapse sticky horizontal id="collapseWidthExample" style="width: 240px;">
      <BvCard>
        <BvCardBody>This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.</BvCardBody>
      </BvCard>
    </BvCollapse>
    <BvDiv :paddin="2" flex-grow="grow-1" style="height:1000px;">Content</BvDiv>
  </BvDiv>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '../components/HelloWorld.vue' 

export default defineComponent({
  name: 'HomeView',
  components: {
  }
})
</script>
