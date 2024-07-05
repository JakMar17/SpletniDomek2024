<template>
  <div class="container">
    <div class="header__wrapper">
      <h1 class="header-h1">Moja zgodba</h1>
    </div>

      <div class="about-me__wrapper">


        <div class="about-me__img-wrapper">
          <img class="about-me__img" src="../assets/images/me-2.jpg"/>
        </div>


        <div class="about-me__description">
          <h2 class="header-h2">Kdo sem?</h2>
          <p>Sem Jakob. Kraševec. Tehnolški navdušenec in vedno znova iskalec rešitev v lastnih problemih in problemih ljudi okrog mene.</p>
          <p>Že od malih nog sem rad raziskoval in se učil novih stvari. Zato me je pot hitro zanesla v tehnologijo in računalništvo.</p>
          <p>V zadnjem času se posvečam predvsem razvoju uporabniških izkušenj in vmesnikov na <b>spletnih straneh in aplikacijah</b>; hkrati pa ohranjam stik s tehnologijami in pristopi zalednih sistemov in podatkovnih baz.</p>
          <p>Največ izkušenj imam z ogrodjema <b>Angular</b> in <b>NuxJS</b> na frontendu, za razvoj mobilnih aplikacij se poslužujem ogrodja <b>Flutter</b>, zaledne sisteme pa v <b>SpringBoot</b> in podatkovni bazi <b>MariaDB</b> ali PostgreSQL.</p>
          <h3 class="header-h3 mt-5">Kontakt</h3>
          <div class="is-flex is-flex-wrap-wrap" style="gap: 3rem">
            <div>
              <div style="font-weight: 600; font-family: 'Inter Tight', serif; letter-spacing: 2px;">EMAIL</div>
              <div>jakob.marusic17@gmail.com</div>
            </div>
            <div>
              <div style="font-weight: 600; font-family: 'Inter Tight', serif; letter-spacing: 2px;">TELEFON</div>
              <div>+386 (0)31 708 115</div>
            </div>
          </div>
        </div>
      </div>

    <h2 class="header-h2" style="margin-top: 4rem; margin-bottom: 2rem">Najpogosteje uporabljena orodja</h2>

    <div class="is-flex is-justify-content-space-between is-flex-wrap-wrap">
      <div style="width: 45%; min-width: 20em; margin-bottom: 2rem">
        <div class="is-flex" style="gap: 2rem">
          <div style="height: 4rem; width: 4rem; background: #f0f0f0; border-radius: 8px; display: flex; justify-content: center; align-items: center">
            <i style="font-size: 2rem" class="ri-vuejs-fill"/>
          </div>
          <div style="flex-grow: 1">
            <div style="font-family: 'Inter Tight', serif; font-size: 18px; font-weight: 600; letter-spacing: 1px">NuxtJS</div>
            <div style="border-bottom: 1px solid black; margin: 0.25rem 0;"></div>
            <div>Razvoj spletnih strani</div>
          </div>
        </div>
      </div>

      <div style="width: 45%; ; min-width: 20em; margin-bottom: 2rem">
        <div class="is-flex" style="gap: 2rem">
          <div style="height: 4rem; width: 4rem; background: #f0f0f0; border-radius: 8px; display: flex; justify-content: center; align-items: center">
            <i style="font-size: 2rem" class="ri-angularjs-fill"/>
          </div>
          <div style="flex-grow: 1">
            <div style="font-family: 'Inter Tight', serif; font-size: 18px; font-weight: 600; letter-spacing: 1px">Angular</div>
            <div style="border-bottom: 1px solid black; margin: 0.25rem 0;"></div>
            <div>Razvoj spletnih aplikacij</div>
          </div>
        </div>
      </div>

      <div style="width: 45%; ; min-width: 20em; margin-bottom: 2rem">
        <div class="is-flex" style="gap: 2rem">
          <div style="height: 4rem; width: 4rem; background: #f0f0f0; border-radius: 8px; display: flex; justify-content: center; align-items: center">
            <i style="font-size: 2rem" class="ri-flutter-fill"/>
          </div>
          <div style="flex-grow: 1">
            <div style="font-family: 'Inter Tight', serif; font-size: 18px; font-weight: 600; letter-spacing: 1px">Flutter</div>
            <div style="border-bottom: 1px solid black; margin: 0.25rem 0;"></div>
            <div>Razvoj mobilnih aplikacij</div>
          </div>
        </div>
      </div>

      <div style="width: 45%; ; min-width: 20em; margin-bottom: 2rem">
        <div class="is-flex" style="gap: 2rem">
          <div style="height: 4rem; width: 4rem; background: #f0f0f0; border-radius: 8px; display: flex; justify-content: center; align-items: center">
            <i style="font-size: 2rem" class="ri-css3-fill"/>
          </div>
          <div style="flex-grow: 1">
            <div style="font-family: 'Inter Tight', serif; font-size: 18px; font-weight: 600; letter-spacing: 1px">BulmaCSS</div>
            <div style="border-bottom: 1px solid black; margin: 0.25rem 0;"></div>
            <div>Osnova za gradnjo stilov CSS</div>
          </div>
        </div>
      </div>

      <div style="width: 45%; ; min-width: 20em; margin-bottom: 2rem">
        <div class="is-flex" style="gap: 2rem">
          <div style="height: 4rem; width: 4rem; background: #f0f0f0; border-radius: 8px; display: flex; justify-content: center; align-items: center">
            <i style="font-size: 2rem" class="ri-server-fill"/>
          </div>
          <div style="flex-grow: 1">
            <div style="font-family: 'Inter Tight', serif; font-size: 18px; font-weight: 600; letter-spacing: 1px">SpringBoot</div>
            <div style="border-bottom: 1px solid black; margin: 0.25rem 0;"></div>
            <div>Razvoj zalednih sistemov</div>
          </div>
        </div>
      </div>

      <div style="width: 45%; ; min-width: 20em; margin-bottom: 2rem">
        <div class="is-flex" style="gap: 2rem">
          <div style="height: 4rem; width: 4rem; background: #f0f0f0; border-radius: 8px; display: flex; justify-content: center; align-items: center">
            <i style="font-size: 2rem" class="ri-database-fill"/>
          </div>
          <div style="flex-grow: 1">
            <div style="font-family: 'Inter Tight', serif; font-size: 18px; font-weight: 600; letter-spacing: 1px">MariaDB & PostgreSQL</div>
            <div style="border-bottom: 1px solid black; margin: 0.25rem 0;"></div>
            <div>Podatkovne baze za hrambo podatkov</div>
          </div>
        </div>
      </div>

      <div style="width: 45%; ; min-width: 20em; margin-bottom: 2rem">
        <div class="is-flex" style="gap: 2rem">
          <div style="height: 4rem; width: 4rem; background: #f0f0f0; border-radius: 8px; display: flex; justify-content: center; align-items: center">
            <i style="font-size: 2rem" class="ri-ubuntu-fill"/>
          </div>
          <div style="flex-grow: 1">
            <div style="font-family: 'Inter Tight', serif; font-size: 18px; font-weight: 600; letter-spacing: 1px">Docker Compose</div>
            <div style="border-bottom: 1px solid black; margin: 0.25rem 0;"></div>
            <div>Orodje za lastno gostovanje storitev</div>
          </div>
        </div>
      </div>

      <div style="width: 45%; ; min-width: 20em; margin-bottom: 2rem">
        <div class="is-flex" style="gap: 2rem">
          <div style="height: 4rem; width: 4rem; background: #f0f0f0; border-radius: 8px; display: flex; justify-content: center; align-items: center">
            <i style="font-size: 2rem" class="ri-terminal-window-fill"/>
          </div>
          <div style="flex-grow: 1">
            <div style="font-family: 'Inter Tight', serif; font-size: 18px; font-weight: 600; letter-spacing: 1px">IntelliJ & VSCode</div>
            <div style="border-bottom: 1px solid black; margin: 0.25rem 0;"></div>
            <div>Najpogosteje uporabljen IDE za razvoj</div>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>
<script setup lang="ts">
</script>

<style scoped lang="scss">

.about-me {
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  &__description {
    width: 100%;
    background: #f0f0f0;
    border-radius: 8px;
    align-self: stretch;
    padding: 1rem;

    p:not(:last-child) {
      margin-bottom: 1rem;
    }

    @media screen and (min-width: 768px) {
      width: 66%;
    }
  }

  &__img {
    width: 100%;
    object-fit: cover;
    border-radius: inherit;
    max-height: 40em;

    &-wrapper {
      display: flex;
      justify-content: center;
      border-radius: 8px;
        width: 100%;
      margin-bottom: 3rem;


      @media screen and (min-width: 768px) {
      margin-bottom: unset;
      width: 30%;
      }
    }
  }
}

</style>