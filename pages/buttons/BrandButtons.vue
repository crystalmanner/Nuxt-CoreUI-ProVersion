<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col cols="12">
        <b-card>
          <div slot="header">
            <strong>Brand Button</strong>
          </div>
          <small>Usage </small><code style="text-transform:lowercase">
            &lt;b-button variant="facebook"&gt;&lt;span&gt;Facebook&lt;/span&gt;&lt;/b-button&gt;
          </code>
          <hr>
          <h6>Size Small <small>Add <code>size="sm"</code></small></h6>
          <p>
            <b-button size="sm" class="mr-1 btn-brand" variant="facebook">
              <i class="fa fa-facebook" /><span>Facebook</span>
            </b-button>
            <b-button size="sm" class="mr-1 btn-brand" variant="twitter">
              <i class="fa fa-twitter" /><span>Twitter</span>
            </b-button>
            <b-button size="sm" variant="linkedin" class="mr-1 btn-brand">
              <i class="fa fa-linkedin" /><span>LinkedIn</span>
            </b-button>
            <b-button size="sm" variant="flickr" class="mr-1 btn-brand">
              <i class="fa fa-flickr" /><span>Flickr</span>
            </b-button>
            <b-button size="sm" variant="tumblr" class="mr-1 btn-brand">
              <i class="fa fa-tumblr" /><span>Tumblr</span>
            </b-button>
            <b-button size="sm" variant="xing" class="mr-1 btn-brand">
              <i class="fa fa-xing" /><span>Xing</span>
            </b-button>
            <b-button size="sm" variant="github" class="mr-1 btn-brand">
              <i class="fa fa-github" /><span>Github</span>
            </b-button>
            <b-button size="sm" variant="html5" class="mr-1 btn-brand">
              <i class="fa fa-html5" /><span>HTML5</span>
            </b-button>
            <b-button size="sm" variant="openid" class="mr-1 btn-brand">
              <i class="fa fa-openid" /><span>OpenID</span>
            </b-button>
            <b-button size="sm" variant="stack-overflow" class="mr-1 btn-brand">
              <i class="fa fa-stack-overflow" /><span>StackOverflow</span>
            </b-button>
            <b-button size="sm" variant="css3" class="mr-1 btn-brand">
              <i class="fa fa-css3" /><span>CSS3</span>
            </b-button>
            <b-button size="sm" variant="youtube" class="mr-1 btn-brand">
              <i class="fa fa-youtube" /><span>YouTube</span>
            </b-button>
            <b-button size="sm" variant="dribbble" class="mr-1 btn-brand">
              <i class="fa fa-dribbble" /><span>Dribbble</span>
            </b-button>
            <b-button size="sm" variant="google-plus" class="mr-1 btn-brand">
              <i class="fa fa-google-plus" /><span>Google+</span>
            </b-button>
            <b-button size="sm" variant="instagram" class="mr-1 btn-brand">
              <i class="fa fa-instagram" /><span>Instagram</span>
            </b-button>
            <b-button size="sm" variant="pinterest" class="mr-1 btn-brand">
              <i class="fa fa-pinterest" /><span>Pinterest</span>
            </b-button>
            <b-button size="sm" variant="vk" class="mr-1 btn-brand">
              <i class="fa fa-vk" /><span>VK</span>
            </b-button>
            <b-button size="sm" variant="yahoo" class="mr-1 btn-brand">
              <i class="fa fa-yahoo" /><span>Yahoo</span>
            </b-button>
            <b-button size="sm" variant="behance" class="mr-1 btn-brand">
              <i class="fa fa-behance" /><span>Behance</span>
            </b-button>
            <b-button size="sm" variant="dropbox" class="mr-1 btn-brand">
              <i class="fa fa-dropbox" /><span>Dropbox</span>
            </b-button>
            <b-button size="sm" variant="reddit" class="mr-1 btn-brand">
              <i class="fa fa-reddit" /><span>Reddit</span>
            </b-button>
            <b-button size="sm" variant="spotify" class="mr-1 btn-brand">
              <i class="fa fa-spotify" /><span>Spotify</span>
            </b-button>
            <b-button size="sm" variant="vine" class="mr-1 btn-brand">
              <i class="fa fa-vine" /><span>Vine</span>
            </b-button>
            <b-button size="sm" variant="foursquare" class="mr-1 btn-brand">
              <i class="fa fa-foursquare" /><span>Forsquare</span>
            </b-button>
            <b-button size="sm" variant="vimeo" class="mr-1 btn-brand">
              <i class="fa fa-vimeo" /><span>Vimeo</span>
            </b-button>
          </p>
          <h6>Size Normal</h6>
          <p>
            <b-button variant="facebook" class="mr-1 btn-brand">
              <i class="fa fa-facebook" /><span>Facebook</span>
            </b-button>
            <b-button variant="twitter" class="mr-1 btn-brand">
              <i class="fa fa-twitter" /><span>Twitter</span>
            </b-button>
            <b-button variant="linkedin" class="mr-1 btn-brand">
              <i class="fa fa-linkedin" /><span>LinkedIn</span>
            </b-button>
            <b-button variant="flickr" class="mr-1 btn-brand">
              <i class="fa fa-flickr" /><span>Flickr</span>
            </b-button>
            <b-button variant="tumblr" class="mr-1 btn-brand">
              <i class="fa fa-tumblr" /><span>Tumblr</span>
            </b-button>
            <b-button variant="xing" class="mr-1 btn-brand">
              <i class="fa fa-xing" /><span>Xing</span>
            </b-button>
            <b-button variant="github" class="mr-1 btn-brand">
              <i class="fa fa-github" /><span>Github</span>
            </b-button>
            <b-button variant="html5" class="mr-1 btn-brand">
              <i class="fa fa-html5" /><span>HTML5</span>
            </b-button>
            <b-button variant="openid" class="mr-1 btn-brand">
              <i class="fa fa-openid" /><span>OpenID</span>
            </b-button>
            <b-button variant="stack-overflow" class="mr-1 btn-brand">
              <i class="fa fa-stack-overflow" /><span>StackOverflow</span>
            </b-button>
            <b-button variant="css3" class="mr-1 btn-brand">
              <i class="fa fa-css3" /><span>CSS3</span>
            </b-button>
            <b-button variant="youtube" class="mr-1 btn-brand">
              <i class="fa fa-youtube" /><span>YouTube</span>
            </b-button>
            <b-button variant="dribbble" class="mr-1 btn-brand">
              <i class="fa fa-dribbble" /><span>Dribbble</span>
            </b-button>
            <b-button variant="google-plus" class="mr-1 btn-brand">
              <i class="fa fa-google-plus" /><span>Google+</span>
            </b-button>
            <b-button variant="instagram" class="mr-1 btn-brand">
              <i class="fa fa-instagram" /><span>Instagram</span>
            </b-button>
            <b-button variant="pinterest" class="mr-1 btn-brand">
              <i class="fa fa-pinterest" /><span>Pinterest</span>
            </b-button>
            <b-button variant="vk" class="mr-1 btn-brand">
              <i class="fa fa-vk" /><span>VK</span>
            </b-button>
            <b-button variant="yahoo" class="mr-1 btn-brand">
              <i class="fa fa-yahoo" /><span>Yahoo</span>
            </b-button>
            <b-button variant="behance" class="mr-1 btn-brand">
              <i class="fa fa-behance" /><span>Behance</span>
            </b-button>
            <b-button variant="dropbox" class="mr-1 btn-brand">
              <i class="fa fa-dropbox" /><span>Dropbox</span>
            </b-button>
            <b-button variant="reddit" class="mr-1 btn-brand">
              <i class="fa fa-reddit" /><span>Reddit</span>
            </b-button>
            <b-button variant="spotify" class="mr-1 btn-brand">
              <i class="fa fa-spotify" /><span>Spotify</span>
            </b-button>
            <b-button variant="vine" class="mr-1 btn-brand">
              <i class="fa fa-vine" /><span>Vine</span>
            </b-button>
            <b-button variant="foursquare" class="mr-1 btn-brand">
              <i class="fa fa-foursquare" /><span>Forsquare</span>
            </b-button>
            <b-button variant="vimeo" class="mr-1 btn-brand">
              <i class="fa fa-vimeo" /><span>Vimeo</span>
            </b-button>
          </p>
          <h6>Size Large <small>Add <code>size="lg"</code></small></h6>
          <p>
            <b-button size="lg" variant="facebook" class="mr-1 btn-brand">
              <i class="fa fa-facebook" /><span>Facebook</span>
            </b-button>
            <b-button size="lg" variant="twitter" class="mr-1 btn-brand">
              <i class="fa fa-twitter" /><span>Twitter</span>
            </b-button>
            <b-button size="lg" variant="linkedin" class="mr-1 btn-brand">
              <i class="fa fa-linkedin" /><span>LinkedIn</span>
            </b-button>
            <b-button size="lg" variant="flickr" class="mr-1 btn-brand">
              <i class="fa fa-flickr" /><span>Flickr</span>
            </b-button>
            <b-button size="lg" variant="tumblr" class="mr-1 btn-brand">
              <i class="fa fa-tumblr" /><span>Tumblr</span>
            </b-button>
            <b-button size="lg" variant="xing" class="mr-1 btn-brand">
              <i class="fa fa-xing" /><span>Xing</span>
            </b-button>
            <b-button size="lg" variant="github" class="mr-1 btn-brand">
              <i class="fa fa-github" /><span>Github</span>
            </b-button>
            <b-button size="lg" variant="html5" class="mr-1 btn-brand">
              <i class="fa fa-html5" /><span>HTML5</span>
            </b-button>
            <b-button size="lg" variant="openid" class="mr-1 btn-brand">
              <i class="fa fa-openid" /><span>OpenID</span>
            </b-button>
            <b-button size="lg" variant="stack-overflow" class="mr-1 btn-brand">
              <i class="fa fa-stack-overflow" /><span>StackOverflow</span>
            </b-button>
            <b-button size="lg" variant="css3" class="mr-1 btn-brand">
              <i class="fa fa-css3" /><span>CSS3</span>
            </b-button>
            <b-button size="lg" variant="youtube" class="mr-1 btn-brand">
              <i class="fa fa-youtube" /><span>YouTube</span>
            </b-button>
            <b-button size="lg" variant="dribbble" class="mr-1 btn-brand">
              <i class="fa fa-dribbble" /><span>Dribbble</span>
            </b-button>
            <b-button size="lg" variant="google-plus" class="mr-1 btn-brand">
              <i class="fa fa-google-plus" /><span>Google+</span>
            </b-button>
            <b-button size="lg" variant="instagram" class="mr-1 btn-brand">
              <i class="fa fa-instagram" /><span>Instagram</span>
            </b-button>
            <b-button size="lg" variant="pinterest" class="mr-1 btn-brand">
              <i class="fa fa-pinterest" /><span>Pinterest</span>
            </b-button>
            <b-button size="lg" variant="vk" class="mr-1 btn-brand">
              <i class="fa fa-vk" /><span>VK</span>
            </b-button>
            <b-button size="lg" variant="yahoo" class="mr-1 btn-brand">
              <i class="fa fa-yahoo" /><span>Yahoo</span>
            </b-button>
            <b-button size="lg" variant="behance" class="mr-1 btn-brand">
              <i class="fa fa-behance" /><span>Behance</span>
            </b-button>
            <b-button size="lg" variant="dropbox" class="mr-1 btn-brand">
              <i class="fa fa-dropbox" /><span>Dropbox</span>
            </b-button>
            <b-button size="lg" variant="reddit" class="mr-1 btn-brand">
              <i class="fa fa-reddit" /><span>Reddit</span>
            </b-button>
            <b-button size="lg" variant="spotify" class="mr-1 btn-brand">
              <i class="fa fa-spotify" /><span>Spotify</span>
            </b-button>
            <b-button size="lg" variant="vine" class="mr-1 btn-brand">
              <i class="fa fa-vine" /><span>Vine</span>
            </b-button>
            <b-button size="lg" variant="foursquare" class="mr-1 btn-brand">
              <i class="fa fa-foursquare" /><span>Forsquare</span>
            </b-button>
            <b-button size="lg" variant="vimeo" class="mr-1 btn-brand">
              <i class="fa fa-vimeo" /><span>Vimeo</span>
            </b-button>
          </p>
        </b-card>
      </b-col><!--/.col-->
      <b-col cols="12">
        <b-card>
          <div slot="header">
            <strong>Brand Button </strong> <small>Icons only</small>
          </div>
          <small>Usage </small> <code style="text-transform:lowercase">
            &lt;b-button variant="facebook icon"&gt;&lt;span&gt;Facebook&lt;/span&gt;&lt;/b-button&gt;
          </code>
          <hr>
          <h6>Size Small <small>Add <code>size="sm"</code></small></h6>
          <p>
            <b-button size="sm" variant="facebook icon" class="mr-1 btn-brand">
              <i class="fa fa-facebook" />
            </b-button>
            <b-button size="sm" variant="twitter icon" class="mr-1 btn-brand">
              <i class="fa fa-twitter" />
            </b-button>
            <b-button size="sm" variant="linkedin icon" class="mr-1 btn-brand">
              <i class="fa fa-linkedin" />
            </b-button>
            <b-button size="sm" variant="flickr icon" class="mr-1 btn-brand">
              <i class="fa fa-flickr" />
            </b-button>
            <b-button size="sm" variant="tumblr icon" class="mr-1 btn-brand">
              <i class="fa fa-tumblr" />
            </b-button>
            <b-button size="sm" variant="xing icon" class="mr-1 btn-brand">
              <i class="fa fa-xing" />
            </b-button>
            <b-button size="sm" variant="github icon" class="mr-1 btn-brand">
              <i class="fa fa-github" />
            </b-button>
            <b-button size="sm" variant="html5 icon" class="mr-1 btn-brand">
              <i class="fa fa-html5" />
            </b-button>
            <b-button size="sm" variant="openid icon" class="mr-1 btn-brand">
              <i class="fa fa-openid" />
            </b-button>
            <b-button size="sm" variant="stack-overflow icon" class="mr-1 btn-brand">
              <i class="fa fa-stack-overflow" />
            </b-button>
            <b-button size="sm" variant="css3 icon" class="mr-1 btn-brand">
              <i class="fa fa-css3" />
            </b-button>
            <b-button size="sm" variant="youtube icon" class="mr-1 btn-brand">
              <i class="fa fa-youtube" />
            </b-button>
            <b-button size="sm" variant="dribbble icon" class="mr-1 btn-brand">
              <i class="fa fa-dribbble" />
            </b-button>
            <b-button size="sm" variant="google-plus icon" class="mr-1 btn-brand">
              <i class="fa fa-google-plus" />
            </b-button>
            <b-button size="sm" variant="instagram icon" class="mr-1 btn-brand">
              <i class="fa fa-instagram" />
            </b-button>
            <b-button size="sm" variant="pinterest icon" class="mr-1 btn-brand">
              <i class="fa fa-pinterest" />
            </b-button>
            <b-button size="sm" variant="vk icon" class="mr-1 btn-brand">
              <i class="fa fa-vk" />
            </b-button>
            <b-button size="sm" variant="yahoo icon" class="mr-1 btn-brand">
              <i class="fa fa-yahoo" />
            </b-button>
            <b-button size="sm" variant="behance icon" class="mr-1 btn-brand">
              <i class="fa fa-behance" />
            </b-button>
            <b-button size="sm" variant="dropbox icon" class="mr-1 btn-brand">
              <i class="fa fa-dropbox" />
            </b-button>
            <b-button size="sm" variant="reddit icon" class="mr-1 btn-brand">
              <i class="fa fa-reddit" />
            </b-button>
            <b-button size="sm" variant="spotify icon" class="mr-1 btn-brand">
              <i class="fa fa-spotify" />
            </b-button>
            <b-button size="sm" variant="vine icon" class="mr-1 btn-brand">
              <i class="fa fa-vine" />
            </b-button>
            <b-button size="sm" variant="foursquare icon" class="mr-1 btn-brand">
              <i class="fa fa-foursquare" />
            </b-button>
            <b-button size="sm" variant="vimeo icon" class="mr-1 btn-brand">
              <i class="fa fa-vimeo" />
            </b-button>
          </p>
          <h6>Size Normal</h6>
          <p>
            <b-button variant="facebook icon" class="mr-1 btn-brand">
              <i class="fa fa-facebook" />
            </b-button>
            <b-button variant="twitter icon" class="mr-1 btn-brand">
              <i class="fa fa-twitter" />
            </b-button>
            <b-button variant="linkedin icon" class="mr-1 btn-brand">
              <i class="fa fa-linkedin" />
            </b-button>
            <b-button variant="flickr icon" class="mr-1 btn-brand">
              <i class="fa fa-flickr" />
            </b-button>
            <b-button variant="tumblr icon" class="mr-1 btn-brand">
              <i class="fa fa-tumblr" />
            </b-button>
            <b-button variant="xing icon" class="mr-1 btn-brand">
              <i class="fa fa-xing" />
            </b-button>
            <b-button variant="github icon" class="mr-1 btn-brand">
              <i class="fa fa-github" />
            </b-button>
            <b-button variant="html5 icon" class="mr-1 btn-brand">
              <i class="fa fa-html5" />
            </b-button>
            <b-button variant="openid icon" class="mr-1 btn-brand">
              <i class="fa fa-openid" />
            </b-button>
            <b-button variant="stack-overflow icon" class="mr-1 btn-brand">
              <i class="fa fa-stack-overflow" />
            </b-button>
            <b-button variant="css3 icon" class="mr-1 btn-brand">
              <i class="fa fa-css3" />
            </b-button>
            <b-button variant="youtube icon" class="mr-1 btn-brand">
              <i class="fa fa-youtube" />
            </b-button>
            <b-button variant="dribbble icon" class="mr-1 btn-brand">
              <i class="fa fa-dribbble" />
            </b-button>
            <b-button variant="google-plus icon" class="mr-1 btn-brand">
              <i class="fa fa-google-plus" />
            </b-button>
            <b-button variant="instagram icon" class="mr-1 btn-brand">
              <i class="fa fa-instagram" />
            </b-button>
            <b-button variant="pinterest icon" class="mr-1 btn-brand">
              <i class="fa fa-pinterest" />
            </b-button>
            <b-button variant="vk icon" class="mr-1 btn-brand">
              <i class="fa fa-vk" />
            </b-button>
            <b-button variant="yahoo icon" class="mr-1 btn-brand">
              <i class="fa fa-yahoo" />
            </b-button>
            <b-button variant="behance icon" class="mr-1 btn-brand">
              <i class="fa fa-behance" />
            </b-button>
            <b-button variant="dropbox icon" class="mr-1 btn-brand">
              <i class="fa fa-dropbox" />
            </b-button>
            <b-button variant="reddit icon" class="mr-1 btn-brand">
              <i class="fa fa-reddit" />
            </b-button>
            <b-button variant="spotify icon" class="mr-1 btn-brand">
              <i class="fa fa-spotify" />
            </b-button>
            <b-button variant="vine icon" class="mr-1 btn-brand">
              <i class="fa fa-vine" />
            </b-button>
            <b-button variant="foursquare icon" class="mr-1 btn-brand">
              <i class="fa fa-foursquare" />
            </b-button>
            <b-button variant="vimeo icon" class="mr-1 btn-brand">
              <i class="fa fa-vimeo" />
            </b-button>
          </p>
          <h6>Size Large <small>Add <code>size="lg"</code></small></h6>
          <p>
            <b-button size="lg" variant="facebook icon" class="mr-1 btn-brand">
              <i class="fa fa-facebook" />
            </b-button>
            <b-button size="lg" variant="twitter icon" class="mr-1 btn-brand">
              <i class="fa fa-twitter" />
            </b-button>
            <b-button size="lg" variant="linkedin icon" class="mr-1 btn-brand">
              <i class="fa fa-linkedin" />
            </b-button>
            <b-button size="lg" variant="flickr icon" class="mr-1 btn-brand">
              <i class="fa fa-flickr" />
            </b-button>
            <b-button size="lg" variant="tumblr icon" class="mr-1 btn-brand">
              <i class="fa fa-tumblr" />
            </b-button>
            <b-button size="lg" variant="xing icon" class="mr-1 btn-brand">
              <i class="fa fa-xing" />
            </b-button>
            <b-button size="lg" variant="github icon" class="mr-1 btn-brand">
              <i class="fa fa-github" />
            </b-button>
            <b-button size="lg" variant="html5 icon" class="mr-1 btn-brand">
              <i class="fa fa-html5" />
            </b-button>
            <b-button size="lg" variant="openid icon" class="mr-1 btn-brand">
              <i class="fa fa-openid" />
            </b-button>
            <b-button size="lg" variant="stack-overflow icon" class="mr-1 btn-brand">
              <i class="fa fa-stack-overflow" />
            </b-button>
            <b-button size="lg" variant="css3 icon" class="mr-1 btn-brand">
              <i class="fa fa-css3" />
            </b-button>
            <b-button size="lg" variant="youtube icon" class="mr-1 btn-brand">
              <i class="fa fa-youtube" />
            </b-button>
            <b-button size="lg" variant="dribbble icon" class="mr-1 btn-brand">
              <i class="fa fa-dribbble" />
            </b-button>
            <b-button size="lg" variant="google-plus icon" class="mr-1 btn-brand">
              <i class="fa fa-google-plus" />
            </b-button>
            <b-button size="lg" variant="instagram icon" class="mr-1 btn-brand">
              <i class="fa fa-instagram" />
            </b-button>
            <b-button size="lg" variant="pinterest icon" class="mr-1 btn-brand">
              <i class="fa fa-pinterest" />
            </b-button>
            <b-button size="lg" variant="vk icon" class="mr-1 btn-brand">
              <i class="fa fa-vk" />
            </b-button>
            <b-button size="lg" variant="yahoo icon" class="mr-1 btn-brand">
              <i class="fa fa-yahoo" />
            </b-button>
            <b-button size="lg" variant="behance icon" class="mr-1 btn-brand">
              <i class="fa fa-behance" />
            </b-button>
            <b-button size="lg" variant="dropbox icon" class="mr-1 btn-brand">
              <i class="fa fa-dropbox" />
            </b-button>
            <b-button size="lg" variant="reddit icon" class="mr-1 btn-brand">
              <i class="fa fa-reddit" />
            </b-button>
            <b-button size="lg" variant="spotify icon" class="mr-1 btn-brand">
              <i class="fa fa-spotify" />
            </b-button>
            <b-button size="lg" variant="vine icon" class="mr-1 btn-brand">
              <i class="fa fa-vine" />
            </b-button>
            <b-button size="lg" variant="foursquare icon" class="mr-1 btn-brand">
              <i class="fa fa-foursquare" />
            </b-button>
            <b-button size="lg" variant="vimeo icon" class="mr-1 btn-brand">
              <i class="fa fa-vimeo" />
            </b-button>
          </p>
        </b-card>
      </b-col><!--/.col-->

      <b-col cols="12">
        <b-card>
          <div slot="header">
            <strong>Brand Button </strong> <small>Text only</small>
          </div>
          <small>Usage </small> <code style="text-transform:lowercase">
            &lt;b-button variant="facebook text"&gt;&lt;span&gt;Facebook&lt;/span&gt;&lt;/b-button&gt;
          </code>
          <hr>
          <h6>Size Small <small>Add <code>size="sm"</code></small></h6>
          <p>
            <b-button size="sm" variant="facebook text" class="mr-1 btn-brand">
              <span>Facebook</span>
            </b-button>
            <b-button size="sm" variant="twitter text" class="mr-1 btn-brand">
              <span>Twitter</span>
            </b-button>
            <b-button size="sm" variant="linkedin text" class="mr-1 btn-brand">
              <span>LinkedIn</span>
            </b-button>
            <b-button size="sm" variant="flickr text" class="mr-1 btn-brand">
              <span>Flickr</span>
            </b-button>
            <b-button size="sm" variant="tumblr text" class="mr-1 btn-brand">
              <span>Tumblr</span>
            </b-button>
            <b-button size="sm" variant="xing text" class="mr-1 btn-brand">
              <span>Xing</span>
            </b-button>
            <b-button size="sm" variant="github text" class="mr-1 btn-brand">
              <span>Github</span>
            </b-button>
            <b-button size="sm" variant="html5 text" class="mr-1 btn-brand">
              <span>HTML5</span>
            </b-button>
            <b-button size="sm" variant="openid text" class="mr-1 btn-brand">
              <span>OpenID</span>
            </b-button>
            <b-button size="sm" variant="stack-overflow text" class="mr-1 btn-brand">
              <span>StackOverflow</span>
            </b-button>
            <b-button size="sm" variant="css3 text" class="mr-1 btn-brand">
              <span>CSS3</span>
            </b-button>
            <b-button size="sm" variant="youtube text" class="mr-1 btn-brand">
              <span>YouTube</span>
            </b-button>
            <b-button size="sm" variant="dribbble text" class="mr-1 btn-brand">
              <span>Dribbble</span>
            </b-button>
            <b-button size="sm" variant="google-plus text" class="mr-1 btn-brand">
              <span>Google+</span>
            </b-button>
            <b-button size="sm" variant="instagram text" class="mr-1 btn-brand">
              <span>Instagram</span>
            </b-button>
            <b-button size="sm" variant="pinterest text" class="mr-1 btn-brand">
              <span>Pinterest</span>
            </b-button>
            <b-button size="sm" variant="vk text" class="mr-1 btn-brand">
              <span>VK</span>
            </b-button>
            <b-button size="sm" variant="yahoo text" class="mr-1 btn-brand">
              <span>Yahoo</span>
            </b-button>
            <b-button size="sm" variant="behance text" class="mr-1 btn-brand">
              <span>Behance</span>
            </b-button>
            <b-button size="sm" variant="dropbox text" class="mr-1 btn-brand">
              <span>Dropbox</span>
            </b-button>
            <b-button size="sm" variant="reddit text" class="mr-1 btn-brand">
              <span>Reddit</span>
            </b-button>
            <b-button size="sm" variant="spotify text" class="mr-1 btn-brand">
              <span>Spotify</span>
            </b-button>
            <b-button size="sm" variant="vine text" class="mr-1 btn-brand">
              <span>Vine</span>
            </b-button>
            <b-button size="sm" variant="foursquare text" class="mr-1 btn-brand">
              <span>Forsquare</span>
            </b-button>
            <b-button size="sm" variant="vimeo text" class="mr-1 btn-brand">
              <span>Vimeo</span>
            </b-button>
          </p>
          <h6>Size Normal</h6>
          <p>
            <b-button variant="facebook text" class="mr-1 btn-brand">
              <span>Facebook</span>
            </b-button>
            <b-button variant="twitter text" class="mr-1 btn-brand">
              <span>Twitter</span>
            </b-button>
            <b-button variant="linkedin text" class="mr-1 btn-brand">
              <span>LinkedIn</span>
            </b-button>
            <b-button variant="flickr text" class="mr-1 btn-brand">
              <span>Flickr</span>
            </b-button>
            <b-button variant="tumblr text" class="mr-1 btn-brand">
              <span>Tumblr</span>
            </b-button>
            <b-button variant="xing text" class="mr-1 btn-brand">
              <span>Xing</span>
            </b-button>
            <b-button variant="github text" class="mr-1 btn-brand">
              <span>Github</span>
            </b-button>
            <b-button variant="html5 text" class="mr-1 btn-brand">
              <span>HTML5</span>
            </b-button>
            <b-button variant="openid text" class="mr-1 btn-brand">
              <span>OpenID</span>
            </b-button>
            <b-button variant="stack-overflow text" class="mr-1 btn-brand">
              <span>StackOverflow</span>
            </b-button>
            <b-button variant="css3 text" class="mr-1 btn-brand">
              <span>CSS3</span>
            </b-button>
            <b-button variant="youtube text" class="mr-1 btn-brand">
              <span>YouTube</span>
            </b-button>
            <b-button variant="dribbble text" class="mr-1 btn-brand">
              <span>Dribbble</span>
            </b-button>
            <b-button variant="google-plus text" class="mr-1 btn-brand">
              <span>Google+</span>
            </b-button>
            <b-button variant="instagram text" class="mr-1 btn-brand">
              <span>Instagram</span>
            </b-button>
            <b-button variant="pinterest text" class="mr-1 btn-brand">
              <span>Pinterest</span>
            </b-button>
            <b-button variant="vk text" class="mr-1 btn-brand">
              <span>VK</span>
            </b-button>
            <b-button variant="yahoo text" class="mr-1 btn-brand">
              <span>Yahoo</span>
            </b-button>
            <b-button variant="behance text" class="mr-1 btn-brand">
              <span>Behance</span>
            </b-button>
            <b-button variant="dropbox text" class="mr-1 btn-brand">
              <span>Dropbox</span>
            </b-button>
            <b-button variant="reddit text" class="mr-1 btn-brand">
              <span>Reddit</span>
            </b-button>
            <b-button variant="spotify text" class="mr-1 btn-brand">
              <span>Spotify</span>
            </b-button>
            <b-button variant="vine text" class="mr-1 btn-brand">
              <span>Vine</span>
            </b-button>
            <b-button variant="foursquare text" class="mr-1 btn-brand">
              <span>Forsquare</span>
            </b-button>
            <b-button variant="vimeo text" class="mr-1 btn-brand">
              <span>Vimeo</span>
            </b-button>
          </p>
          <h6>Size Large <small>Add <code>size="lg"</code></small></h6>
          <p>
            <b-button size="lg" variant="facebook text" class="mr-1 btn-brand">
              <span>Facebook</span>
            </b-button>
            <b-button size="lg" variant="twitter text" class="mr-1 btn-brand">
              <span>Twitter</span>
            </b-button>
            <b-button size="lg" variant="linkedin text" class="mr-1 btn-brand">
              <span>LinkedIn</span>
            </b-button>
            <b-button size="lg" variant="flickr text" class="mr-1 btn-brand">
              <span>Flickr</span>
            </b-button>
            <b-button size="lg" variant="tumblr text" class="mr-1 btn-brand">
              <span>Tumblr</span>
            </b-button>
            <b-button size="lg" variant="xing text" class="mr-1 btn-brand">
              <span>Xing</span>
            </b-button>
            <b-button size="lg" variant="github text" class="mr-1 btn-brand">
              <span>Github</span>
            </b-button>
            <b-button size="lg" variant="html5 text" class="mr-1 btn-brand">
              <span>HTML5</span>
            </b-button>
            <b-button size="lg" variant="openid text" class="mr-1 btn-brand">
              <span>OpenID</span>
            </b-button>
            <b-button size="lg" variant="stack-overflow text" class="mr-1 btn-brand">
              <span>StackOverflow</span>
            </b-button>
            <b-button size="lg" variant="css3 text" class="mr-1 btn-brand">
              <span>CSS3</span>
            </b-button>
            <b-button size="lg" variant="youtube text" class="mr-1 btn-brand">
              <span>YouTube</span>
            </b-button>
            <b-button size="lg" variant="dribbble text" class="mr-1 btn-brand">
              <span>Dribbble</span>
            </b-button>
            <b-button size="lg" variant="google-plus text" class="mr-1 btn-brand">
              <span>Google+</span>
            </b-button>
            <b-button size="lg" variant="instagram text" class="mr-1 btn-brand">
              <span>Instagram</span>
            </b-button>
            <b-button size="lg" variant="pinterest text" class="mr-1 btn-brand">
              <span>Pinterest</span>
            </b-button>
            <b-button size="lg" variant="vk text" class="mr-1 btn-brand">
              <span>VK</span>
            </b-button>
            <b-button size="lg" variant="yahoo text" class="mr-1 btn-brand">
              <span>Yahoo</span>
            </b-button>
            <b-button size="lg" variant="behance text" class="mr-1 btn-brand">
              <span>Behance</span>
            </b-button>
            <b-button size="lg" variant="dropbox text" class="mr-1 btn-brand">
              <span>Dropbox</span>
            </b-button>
            <b-button size="lg" variant="reddit text" class="mr-1 btn-brand">
              <span>Reddit</span>
            </b-button>
            <b-button size="lg" variant="spotify text" class="mr-1 btn-brand">
              <span>Spotify</span>
            </b-button>
            <b-button size="lg" variant="vine text" class="mr-1 btn-brand">
              <span>Vine</span>
            </b-button>
            <b-button size="lg" variant="foursquare text" class="mr-1 btn-brand">
              <span>Forsquare</span>
            </b-button>
            <b-button size="lg" variant="vimeo text" class="mr-1 btn-brand">
              <span>Vimeo</span>
            </b-button>
          </p>
        </b-card>
      </b-col><!--/.col-->
    </b-row><!--/.row-->
  </div>
</template>

<script>
export default {
  name: 'BrandButtons'
}
</script>

<style scoped lang="css">
.btn {
  margin-bottom: 4px;
}
</style>
