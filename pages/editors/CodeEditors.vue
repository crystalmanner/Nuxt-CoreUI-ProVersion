<template>
  <div class="animated fadeIn">
    <b-card show-footer>
      <div slot="header">
        CodeMirror
        <a href="https://coreui.io/pro/vue/" rel="noreferrer noopener" target="_blank" class="badge badge-danger ml-1">
          CoreUI Pro
        </a>
        <div class="card-header-actions">
          <a href="https://github.com/surmon-china/vue-codemirror" rel="noreferrer noopener" target="_blank" class="card-header-action">
            <small class="text-muted">
              docs
            </small>
          </a>
        </div>
      </div>
      <no-ssr placeholder="Codemirror Loading...">
        <codemirror
          v-model="code"
          :options="cmOption"
          @cursorActivity="onCmCursorActivity"
          @ready="onCmReady"
          @focus="onCmFocus"
          @blur="onCmBlur"
        />
      </no-ssr>
      <div slot="footer">
        <b-form inline>
          <!--<b-form-fieldset>-->
          <b-form-group>
            <b-form-select v-model="selectedTheme" :plain="true" size="sm" name="selectedTheme" @change.native="onThemeChange($event)">
              <option value="material">
                material
              </option>
              <option value="eclipse">
                eclipse
              </option>
            </b-form-select>
          </b-form-group>
          <b-form-group>
            <b-form-select v-model="selectedMode" :plain="true" size="sm" name="selectedMode" @change.native="onModeChange($event)">
              <option value="markdown">
                markdown
              </option>
              <option value="javascript">
                javascript
              </option>
              <option value="xml">
                html
              </option>
            </b-form-select>
          </b-form-group>
        <!--</b-form-fieldset>-->
        </b-form>
      </div>
    </b-card>
  </div>
</template>

<script>
import sampleCode from './_examples'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/theme/eclipse.css'
import 'codemirror/mode/markdown/markdown'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/xml/xml'

export default {
  data() {
    const code = sampleCode.xml
    return {
      code,
      cmOption: {
        tabSize: 4,
        styleActiveLine: true,
        lineNumbers: true,
        lineWrapping: true,
        line: true,
        mode: 'xml',
        theme: 'eclipse',
        autofocus: true
      },
      selectedMode: 'xml',
      selectedTheme: 'eclipse'
    }
  },
  methods: {
    onThemeChange(e) {
      this.cmOption.theme = e.target.value
    },
    onModeChange(e) {
      this.cmOption.mode = e.target.value
      this.code = sampleCode[this.cmOption.mode]
    },
    onCmCursorActivity(codemirror) {
      // console.log('onCmCursorActivity', codemirror)
    },
    onCmReady(codemirror) {
      // console.log('onCmReady', codemirror)
    },
    onCmFocus(codemirror) {
      // console.log('onCmFocus', codemirror)
    },
    onCmBlur(codemirror) {
      // console.log('onCmBlur', codemirror)
    }
  }
}
</script>
