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
      <BvNavbarToggler></BvNavbarToggler>
    </BvContainer>
  </BvNavbar>
  <div style="height:1000px;">content</div>

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
