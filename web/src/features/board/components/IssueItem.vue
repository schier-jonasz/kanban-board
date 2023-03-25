<template>
  <v-card class="mb-3">
    <v-card-item class="issue">
      <div class="issue-header">
        <v-chip
          class="issue-header__type"
          color="blue"
          text-color="white"
          variant="elevated"
          size="x-small"
          label
          prepend-icon="mdi-book-open-blank-variant"
        >
          Story
        </v-chip>
        <v-chip
          class="issue-header__priority"
          color="green"
          text-color="white"
          variant="elevated"
          size="x-small"
          label
        >
          LOW
        </v-chip>
      </div>
      <p class="issue__title my-2">Integrate Crowdin webhook to notify translators about changed strings</p>
      <div class="issue-footer">
        <p class="issue-footer__date">08.03.2023</p>
        <div class="assigment">
          <p class="assigment__name">jschier</p>
          <v-avatar
            class="assigment__avatar"
            color="info"
            size="x-small"
          >
            <v-icon
              icon="mdi-account-circle"
              size="x-small"
            ></v-icon>
          </v-avatar>
        </div>
      </div>
    </v-card-item>
  </v-card>
</template>

<style lang="scss" scoped>
@import '@/styles/colors.scss';

.issue {
  &__title {
    font-size: 14px;
    font-weight: 400;
  }
}

.issue-header {
  display: flex;
  align-items: center;

  &__type {
    margin-right: 8px;
  }
}

.issue-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__date {
    color: $grey;
    font-size: 0.75em;
    /* font-weight: 800; */
  }
}

.assigment {
  display: flex;
  align-items: center;
  justify-content: end;

  &__name {
    font-size: small;
    color: $grey;
  }

  &__avatar {
    margin-left: 4px;
  }
}
</style>
