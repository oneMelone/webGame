class GameMenu {
    constructor(root) {
        this.root = root;
        this.$menu = $(`
<div class="game-menu">
    <div class="game-menu-field">
        <div class="game-menu-field-item game-menu-filed-item-single-mode">
            单人模式
        </div>
        <br>
        <div class="game-menu-field-item game-menu-filed-item-multi-mode">
            多人模式
        </div>
        <br>
        <div class="game-menu-field-item game-menu-filed-item-settings">
            设置
        </div>
    </div>
</div>
        `)
        this.root.$game.append(this.$menu);
        this.$single_mode = this.$menu.find('.game-menu-filed-item-single-mode');
        this.$multi_mode = this.$menu.find('.game-menu-filed-item-multi-mode');
        this.$settings = this.$menu.find('.game-menu-filed-item-settings');

        this.start();
    }

    start() {
        this.add_listener_events();
    }

    add_listener_events() {
        let outer = this;
        this.$single_mode.click(function() {
            outer.hide();
            outer.root.playground.show();
        });
        this.$multi_mode.click(function() {
            console.log("click multi");
        });
        this.$settings.click(function() {
            console.log("click settings");
        });
    }

    show() {
        // 显示menu界面
        this.$menu.show();
    }

    hide() {
        // 关闭menu界面
        this.$menu.hide();
    }
}
