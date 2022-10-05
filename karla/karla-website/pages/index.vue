<script>
import navBar from "./comps/nav.vue"
import Desc from "./comps/description.vue"
import card from "./comps/card.vue"

export default {
	components: {
		navBar,
		Desc,
		card
	}
}

</script>

<template>
  <main>
	<navBar/>
	<Desc/>
	<card/>
  </main>
</template>

