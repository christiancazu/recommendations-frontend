<template>
<q-chip
  :color="interest.value ? 'accent' : 'dark'"
  :class="{ 'text-white' : interest.value }"
  :outline="!interest.value"
  clickable
  @click="$emit('selected')"
>
  {{ interest.label }}
</q-chip>
</template>

<script>
export default {
  props: {
    interest: {
      type: Object, default: () => {}
    }
  }
}
</script>
