odoo.define("theme_graphene_blog.editor", function (require) {
    "use strict";

    var s_options = require('web_editor.snippets.options');
    require("website_blog.editor");
    require("web_editor.base");

    var $wrapwrap = $("#wrapwrap");
    var $wrap = $("#wrap");

    // Preview blog post's cover layouts
    s_options.registry.blog_cover.include({
        clear: function (type, value, $li) {
            this._super.apply(this, arguments);
            if (type === "click") this._preview_layout();
        },
        select_class: function () {
            this._super.apply(this, arguments);
            this._preview_layout();
        },
        _preview_layout: function () {
            if (this.$target.hasClass("cover_full")) {
                $wrapwrap.addClass("top_content");
                $wrap.css("margin-top", this.$target.outerHeight() * 0.8);
            } else {
                $wrapwrap.removeClass("top_content");
                $wrap.css("margin-top", "");
            }
        }
    });
});