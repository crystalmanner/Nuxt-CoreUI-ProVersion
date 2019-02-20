<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <b-card
        header-tag="header"
        footer-tag="footer"
      >
        <div slot="header">
          <i class="fa fa-align-justify" /><strong> Bootstrap Pagination</strong>
          <div class="card-header-actions">
            <a href="https://bootstrap-vue.js.org/docs/components/pagination" class="card-header-action" rel="noreferrer noopener" target="_blank">
              <small class="text-muted">
                docs
              </small>
            </a>
          </div>
        </div>
        <div>
          <h6>Default</h6>
          <b-pagination v-model="currentPage" size="md" :total-rows="100" :per-page="10" />
          <br>

          <h6>Small</h6>
          <b-pagination v-model="currentPage" size="sm" :total-rows="100" :per-page="10" />
          <br>

          <div class="d-sm-down-none">
            <h6>Large</h6>
            <b-pagination v-model="currentPage" size="lg" :total-rows="100" :per-page="10" />
            <br>
          </div>

          <div>currentPage: {{ currentPage }}</div>
        </div>
      </b-card>
      <b-card
        header-tag="header"
        footer-tag="footer"
      >
        <div slot="header">
          <i class="fa fa-align-justify" /><strong> Pagination </strong>
          <small>alignment</small>
        </div>
        <div>
          <h6>Left alignment (default)</h6>
          <b-pagination v-model="currentPage" :total-rows="100" :per-page="10" />
          <br>

          <h6>Center alignment</h6>
          <b-pagination v-model="currentPage" align="center" :total-rows="100" :per-page="10" />
          <br>

          <h6>Right (end) alignment</h6>
          <b-pagination v-model="currentPage" align="right" :total-rows="100" :per-page="10" />
          <br>

          <div>currentPage: {{ currentPage }}</div>
        </div>
      </b-card>
      <b-card
        header-tag="header"
        footer-tag="footer"
      >
        <div slot="header">
          <i class="fa fa-align-justify" /><strong> Pagination </strong>
          <small>navigation</small>
        </div>
        <div>
          <h6>Default</h6>
          <b-pagination-nav v-model="currentPage" base-url="#" :number-of-pages="10" />

          <h6 class="mt-4">
            With link generator function
          </h6>
          <b-pagination-nav v-model="currentPage" :link-gen="linkGen" :number-of-pages="10" />
          <br>

          <div class="mt-4">
            currentPage: {{ currentPage }}
          </div>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Paginations',
  data() {
    return {
      currentPage: 3
    }
  },
  methods: {
    linkGen(pageNum) {
      return '#page/' + pageNum + '/foobar'
    }
  }
}
</script>
