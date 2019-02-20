<template>
  <div class="animated fadeIn">
    <div class="email-app">
      <nav>
        <a href="#/apps/email/compose" class="btn btn-danger btn-block">
          New Email
        </a>
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link" href="#/apps/email/inbox">
              <i class="fa fa-inbox" /> Inbox <b-badge variant="danger">
                4
              </b-badge>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="fa fa-star" /> Stared
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="fa fa-rocket" /> Sent
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="fa fa-trash-o" /> Trash
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="fa fa-bookmark" /> Important<b-badge variant="info">
                5
              </b-badge>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="fa fa-inbox" /> Inbox <b-badge variant="danger">
                4
              </b-badge>
            </a>
          </li>
        </ul>
      </nav>
      <main>
        <p class="text-center">
          New Message
        </p>
        <form>
          <div class="form-row mb-3">
            <label for="to" class="col-2 col-sm-1 col-form-label">
              To:
            </label>
            <b-col cols="12" sm="11">
              <input id="to" type="email" class="form-control" placeholder="Type email">
            </b-col>
          </div>
          <div class="form-row mb-3">
            <label for="cc" class="col-2 col-sm-1 col-form-label">
              CC:
            </label>
            <b-col cols="12" sm="11">
              <input id="cc" type="email" class="form-control" placeholder="Type email">
            </b-col>
          </div>
          <div class="form-row mb-3">
            <label for="bcc" class="col-2 col-sm-1 col-form-label">
              BCC:
            </label>
            <b-col cols="12" sm="11">
              <input id="bcc" type="email" class="form-control" placeholder="Type email">
            </b-col>
          </div>
        </form>
        <b-row>
          <b-col sm="11" class="ml-auto">
            <div class="toolbar" role="toolbar">
              <div class="btn-group mr-1">
                <b-button variant="light">
                  <span class="fa fa-bold" />
                </b-button>
                <b-button variant="light">
                  <span class="fa fa-italic" />
                </b-button>
                <b-button variant="light">
                  <span class="fa fa-underline" />
                </b-button>
              </div>
              <div class="btn-group mr-1">
                <b-button variant="light">
                  <span class="fa fa-align-left" />
                </b-button>
                <b-button variant="light">
                  <span class="fa fa-align-right" />
                </b-button>
                <b-button variant="light">
                  <span class="fa fa-align-center" />
                </b-button>
                <b-button variant="light">
                  <span class="fa fa-align-justify" />
                </b-button>
              </div>
              <div class="btn-group mr-1">
                <b-button variant="light">
                  <span class="fa fa-indent" />
                </b-button>
                <b-button variant="light">
                  <span class="fa fa-outdent" />
                </b-button>
              </div>
              <div class="btn-group mr-1">
                <b-button variant="light">
                  <span class="fa fa-list-ul" />
                </b-button>
                <b-button variant="light">
                  <span class="fa fa-list-ol" />
                </b-button>
              </div>
              <b-button variant="light" class="mr-1">
                <span class="fa fa-trash-o" />
              </b-button>
              <b-button variant="light">
                <span class="fa fa-paperclip" />
              </b-button>
              <b-dropdown variant="light" class="ml-1">
                <template slot="button-content">
                  <span class="fa fa-tags" />
                </template>
                <b-dropdown-item href="#">
                  add label <b-badge variant="danger">
                    Home
                  </b-badge>
                </b-dropdown-item>
                <b-dropdown-item href="#">
                  add label <b-badge variant="info">
                    Job
                  </b-badge>
                </b-dropdown-item>
                <b-dropdown-item href="#">
                  add label <b-badge variant="success">
                    Clients
                  </b-badge>
                </b-dropdown-item>
                <b-dropdown-item href="#">
                  add label <b-badge variant="warning">
                    News
                  </b-badge>
                </b-dropdown-item>
              </b-dropdown>
            </div>
            <div class="form-group mt-4">
              <textarea id="message" class="form-control" name="body" rows="12" placeholder="Click here to reply" />
            </div>
            <div class="form-group">
              <b-button class="mr-1" type="submit" variant="success">
                Send
              </b-button>
              <b-button class="mr-1" type="submit" variant="light">
                Draft
              </b-button>
              <b-button class="mr-1" type="submit" variant="danger">
                Discard
              </b-button>
            </div>
          </b-col>
        </b-row>
      </main>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Compose'
}
</script>
