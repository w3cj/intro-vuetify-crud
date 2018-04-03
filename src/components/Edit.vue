<template lang="html">
  <ProductForm :product="product" :onSubmit="submit"></ProductForm>
</template>

<script>
import API from '@/lib/API';
import ProductForm from '@/components/ProductForm';

export default {
  components: {
    ProductForm,
  },
  data() {
    return {
      product: {
        title: '',
        description: '',
        price: 0,
        quantity: 0,
        image: '',
      },
    };
  },
  mounted() {
    const { id } = this.$route.params;
    this.load(id);
  },
  methods: {
    load(id) {
      API.getProduct(id)
        .then((product) => {
          this.product = product;
        });
    },
    submit() {
      this.product.quantity = Number(this.product.quantity);
      API.updateProduct(this.product.id, this.product)
        .then(() => {
          this.$router.push({
            name: 'Product',
            params: {
              id: this.product.id,
            },
          });
        });
    },
  },
};
</script>

<style lang="css">
</style>
