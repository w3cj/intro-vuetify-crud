<template lang="html">
  <v-layout>
    <v-flex xs12>
      <v-form ref="form" v-model="valid">
        <v-text-field
          label="Title"
          v-model="product.title"
          :rules="titleRules"
          required
        ></v-text-field>
        <v-text-field
          label="Description"
          v-model="product.description"
          multi-line
        ></v-text-field>
        <v-text-field
          label="Price"
          v-model="product.price"
          required
          :rules="priceRules"
          prefix="$"
        ></v-text-field>
        <v-text-field
          label="Quantity"
          v-model="product.quantity"
          :rules="quantityRules"
          required
        ></v-text-field>
        <v-text-field
          label="Image"
          v-model="product.image"
          required
          :rules="imageRules"
        ></v-text-field>
        <v-btn @click="submit">submit</v-btn>
        <v-btn @click="clear">clear</v-btn>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ['product', 'onSubmit'],
  data() {
    return {
      valid: true,
      titleRules: [(title) => {
        if (title.trim() === '') return 'Title must not be empty.';
        return true;
      }],
      priceRules: [(price) => {
        if (isNaN(price)) return 'Price must be a valid number.';
        if (Number(price) <= 0) return 'Price must be greater than $0';
        return true;
      }],
      quantityRules: [(quantity) => {
        if (isNaN(quantity)) return 'Quantity must be a valid number.';
        if (Number(quantity) < 0) return 'Quantity must be 0 or greater';
        return true;
      }],
      imageRules: [(image) => {
        if (image.trim() === '') return 'Image must not be empty.';
        return true;
      }],
    };
  },
  methods: {
    submit() {
      if (this.valid) {
        this.onSubmit();
      }
    },
    clear() {
      this.$refs.form.reset();
    },
  },
};
</script>

<style lang="css">
</style>
