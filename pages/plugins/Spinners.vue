<template>
  <div class="animated fadeIn">
    <b-card no-body>
      <div slot="header">
        <i class="fa fa-spinner fa-spin mr-1" /> Spinners - SpinKit
        <a href="https://coreui.io/pro/react/" class="badge badge-danger">
          CoreUI Pro Component
        </a>
        <div class="card-header-actions">
          <a href="https://github.com/tobiasahlin/SpinKit" rel="noopener noreferrer" target="_blank" class="card-header-action">
            <small class="text-muted">
              docs
            </small>
          </a>
        </div>
      </div>
      <b-card-body>
        <p>
          Simple loading spinners animated with CSS. SpinKit uses hardware accelerated (translate and opacity) CSS animations to create smooth and easily customizable animations.
        </p>
      </b-card-body>
    </b-card>
    <b-row>
      <b-col xl="3" lg="4" md="6">
        <b-card no-body>
          <div slot="header">
            <i class="fa fa-spinner" /> Rotating plane
          </div>
          <b-card-body>
            <div class="sk-rotating-plane" />
          </b-card-body>
        </b-card>
      </b-col>
      <b-col xl="3" lg="4" md="6">
        <b-card no-body>
          <div slot="header">
            <i class="fa fa-spinner" /> Double bounce
          </div>
          <b-card-body>
            <div class="sk-double-bounce">
              <div class="sk-child sk-double-bounce1" />
              <div class="sk-child sk-double-bounce2" />
            </div>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col xl="3" lg="4" md="6">
        <b-card no-body>
          <div slot="header">
            <i class="fa fa-spinner" /> Wave
          </div>
          <b-card-body>
            <div class="sk-wave">
              <div class="sk-rect sk-rect1" />&nbsp;<div class="sk-rect sk-rect2" />&nbsp;<div class="sk-rect sk-rect3" />&nbsp;<div class="sk-rect sk-rect4" />&nbsp;<div class="sk-rect sk-rect5" />&nbsp;
            </div>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col xl="3" lg="4" md="6">
        <b-card no-body>
          <div slot="header">
            <i class="fa fa-spinner" /> Wandering cubes
          </div>
          <b-card-body>
            <div class="sk-wandering-cubes">
              <div class="sk-cube sk-cube1" />
              <div class="sk-cube sk-cube2" />
            </div>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col xl="3" lg="4" md="6">
        <b-card no-body>
          <div slot="header">
            <i class="fa fa-spinner" /> Pulse
          </div>
          <b-card-body>
            <div class="sk-spinner sk-spinner-pulse" />
          </b-card-body>
        </b-card>
      </b-col>
      <b-col xl="3" lg="4" md="6">
        <b-card no-body>
          <div slot="header">
            <i class="fa fa-spinner" /> Chasing dots
          </div>
          <b-card-body>
            <div class="sk-chasing-dots">
              <div class="sk-child sk-dot1" />
              <div class="sk-child sk-dot2" />
            </div>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col xl="3" lg="4" md="6">
        <b-card no-body>
          <div slot="header">
            <i class="fa fa-spinner" /> Three bounce
          </div>
          <b-card-body>
            <div class="sk-three-bounce">
              <div class="sk-child sk-bounce1" />
              <div class="sk-child sk-bounce2" />
              <div class="sk-child sk-bounce3" />
            </div>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col xl="3" lg="4" md="6">
        <b-card no-body>
          <div slot="header">
            <i class="fa fa-spinner" /> Circle
          </div>
          <b-card-body>
            <div class="sk-circle">
              <div class="sk-circle1 sk-child" />
              <div class="sk-circle2 sk-child" />
              <div class="sk-circle3 sk-child" />
              <div class="sk-circle4 sk-child" />
              <div class="sk-circle5 sk-child" />
              <div class="sk-circle6 sk-child" />
              <div class="sk-circle7 sk-child" />
              <div class="sk-circle8 sk-child" />
              <div class="sk-circle9 sk-child" />
              <div class="sk-circle10 sk-child" />
              <div class="sk-circle11 sk-child" />
              <div class="sk-circle12 sk-child" />
            </div>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col xl="3" lg="4" md="6">
        <b-card no-body>
          <div slot="header">
            <i class="fa fa-spinner" /> Cube grid
          </div>
          <b-card-body>
            <div class="sk-cube-grid">
              <div class="sk-cube sk-cube1" />
              <div class="sk-cube sk-cube2" />
              <div class="sk-cube sk-cube3" />
              <div class="sk-cube sk-cube4" />
              <div class="sk-cube sk-cube5" />
              <div class="sk-cube sk-cube6" />
              <div class="sk-cube sk-cube7" />
              <div class="sk-cube sk-cube8" />
              <div class="sk-cube sk-cube9" />
            </div>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col xl="3" lg="4" md="6">
        <b-card no-body>
          <div slot="header">
            <i class="fa fa-spinner" /> Fading circle
          </div>
          <b-card-body>
            <div class="sk-fading-circle">
              <div class="sk-circle1 sk-circle" />
              <div class="sk-circle2 sk-circle" />
              <div class="sk-circle3 sk-circle" />
              <div class="sk-circle4 sk-circle" />
              <div class="sk-circle5 sk-circle" />
              <div class="sk-circle6 sk-circle" />
              <div class="sk-circle7 sk-circle" />
              <div class="sk-circle8 sk-circle" />
              <div class="sk-circle9 sk-circle" />
              <div class="sk-circle10 sk-circle" />
              <div class="sk-circle11 sk-circle" />
              <div class="sk-circle12 sk-circle" />
            </div>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col xl="3" lg="4" md="6">
        <b-card no-body>
          <div slot="header">
            <i class="fa fa-spinner" /> Folding Cube
          </div>
          <b-card-body>
            <div class="sk-folding-cube">
              <div class="sk-cube1 sk-cube" />
              <div class="sk-cube2 sk-cube" />
              <div class="sk-cube4 sk-cube" />
              <div class="sk-cube3 sk-cube" />
            </div>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Spinners'
}
</script>

<style src="spinkit/scss/spinkit.scss" lang="scss" />

<style scoped>
  .sk-fading-circle .sk-circle {
    margin: 0 auto;
  }
  .sk-three-bounce {
    height: 40px;
  }
</style>
