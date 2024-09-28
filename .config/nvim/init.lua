vim.cmd("language en_US")

require("config.options")
require("config.keymaps")
require("config.lazy")

if vim.g.vscode then
	vim.cmd([[source $HOME/.config/nvim/vscode/settings.vim]])
	-- Optional plugin
	vim.cmd([[source $HOME/.config/nvim/vscode/easymotion-config.vim]])
end
