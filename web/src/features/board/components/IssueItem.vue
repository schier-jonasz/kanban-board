<template>
  <v-card>
    <v-card-item class="issue">
      <v-chip
        class="issue__chip"
        color="green"
        text-color="white"
        variant="elevated"
        size="x-small"
        label
      >
        LOW
      </v-chip>
      <p class="issue__description my-2">As a translator, I want integrate Crowdin webhook to notify translators about changed strings</p>
      <v-avatar
        class="issue__avatar"
        color="info"
        size="x-small"
      >
        <v-icon
          icon="mdi-account-circle"
          size="x-small"
        ></v-icon>
      </v-avatar>
    </v-card-item>
  </v-card>
</template>

<style lang="scss" scoped>
.issue {
  &__description {
    font-size: 14px;
  }
}
</style>