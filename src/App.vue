

<template>
  <BvNavbar expand="lg" theme="light" background-color="light">
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
</template>

<script setup lang="ts">

</script>

<style>

</style>
