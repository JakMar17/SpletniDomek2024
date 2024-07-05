<template>
  <div class="container">
    <div class="header__wrapper">
      <h1 class="header-h1">Življenjepis</h1>
    </div>

    <h2 class="header-h2">Delovne izkušnje v IT</h2>

    <div>
      <CvSplitRowComponent v-for="izkusnja of izkusnje" :key="izkusnja.company" v-bind="izkusnja"/>
    </div>




    <h2 class="header-h2">Izobrazba</h2>
    <div>
      <CvSplitRowComponent v-for="i of izobrazba" :key="i.position" v-bind="i"/>
    </div>

    <h2 class="header-h2">Mehke veščine</h2>

  </div>
</template>

<script setup lang="ts">


import {CvCardModel} from "~/models";

const izkusnje: CvCardModel[] = [
  {
    company: 'Medius d.o.o',
    position: 'Frontend razvijalec',
    years: '2022 - danes',
    description: [
      "Razvoj Angular poslovnih aplikacij po meri za naročnike Loterijo Slovenije, Telekom Slovenije, VSRS in druge. Celostni razvoj z razvojem uporabniškega vmesnika, uporabniške izkušnje in poslovne logike. Koordinacija preostalih frontend razvijalcev in koordinacija sočasnega razvoja zalednih in čelnih delov sistema.",
      'Razvoj "in-house" prilagojenega ogrodja za hiter razvoj uporabniških vmesnikov.'
    ]
  }
];

const izobrazba: CvCardModel[] = [
  {
    company: 'Fakulteta za računalništvo in informatiko',
    position: 'Univerzitetni diplomirani inženir računalništva in informatike',
    years: '2017 - 2021',
    description: [
      "Razvoj Angular poslovnih aplikacij po meri za naročnike Loterijo Slovenije, Telekom Slovenije, VSRS in druge. Celostni razvoj z razvojem uporabniškega vmesnika, uporabniške izkušnje in poslovne logike. Koordinacija preostalih frontend razvijalcev in koordinacija sočasnega razvoja zalednih in čelnih delov sistema.",
      'Razvoj "in-house" prilagojenega ogrodja za hiter razvoj uporabniških vmesnikov.'
    ]
  }
];

</script>

<style lang="scss" scoped>



</style>