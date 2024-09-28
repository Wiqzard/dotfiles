vim.g.mapleader = " "

local keymap = vim.keymap -- for conciseness


keymap.set("i", "<C-b>", "<ESC>^i", { desc = "move beginning of line" })
keymap.set("i", "<C-e>", "<End>", { desc = "move end of line" })
keymap.set("i", "<C-h>", "<Left>", { desc = "move left" })
keymap.set("i", "<C-l>", "<Right>", { desc = "move right" })
keymap.set("i", "<C-j>", "<Down>", { desc = "move down" })
keymap.set("i", "<C-k>", "<Up>", { desc = "move up" })

keymap.set("n", "<Esc>", "<cmd>noh<CR>", { desc = "general clear highlights" })

keymap.set("n", "<C-h>", "<C-w>h", { desc = "switch window left" })
keymap.set("n", "<C-l>", "<C-w>l", { desc = "switch window right" })
keymap.set("n", "<C-j>", "<C-w>j", { desc = "switch window down" })
keymap.set("n", "<C-k>", "<C-w>k", { desc = "switch window up" })

keymap.set("n", "<C-s>", "<cmd>w<CR>", { desc = "file save" })
keymap.set("n", "<C-c>", "<cmd>%y+<CR>", { desc = "file copy whole" })


-- nvimtree
-- keymap.set("n", "<C-n>", "<cmd>NvimTreeToggle<CR>", { desc = "nvimtree toggle window" })
keymap.set("n", "<C-n>", "<cmd>NvimTreeFindFileToggle<CR>", { desc = "Toggle file explorer on current file" }) -- toggle file explorer on current file
keymap.set("n", "<leader>e", "<cmd>NvimTreeFocus<CR>", { desc = "nvimtree focus window" })
-- keymap.set("n", "<leader>ee", "<cmd>NvimTreeToggle<CR>", { desc = "Toggle file explorer" }) -- toggle file explorer
-- keymap.set("n", "<leader>ec", "<cmd>NvimTreeCollapse<CR>", { desc = "Collapse file explorer" }) -- collapse file explorer
-- keymap.set("n", "<leader>er", "<cmd>NvimTreeRefresh<CR>", { desc = "Refresh file explorer" }) -- refresh file explorer
--
--
-- telescope
keymap.set("n", "<leader>fw", "<cmd>Telescope live_grep<CR>", { desc = "telescope live grep" })
keymap.set("n", "<leader>fb", "<cmd>Telescope buffers<CR>", { desc = "telescope find buffers" })
keymap.set("n", "<leader>fh", "<cmd>Telescope help_tags<CR>", { desc = "telescope help page" })
keymap.set("n", "<leader>ma", "<cmd>Telescope marks<CR>", { desc = "telescope find marks" })
keymap.set("n", "<leader>fo", "<cmd>Telescope oldfiles<CR>", { desc = "telescope find oldfiles" })
keymap.set("n", "<leader>fz", "<cmd>Telescope current_buffer_fuzzy_find<CR>", { desc = "telescope find in current buffer" })
keymap.set("n", "<leader>cm", "<cmd>Telescope git_commits<CR>", { desc = "telescope git commits" })
keymap.set("n", "<leader>gt", "<cmd>Telescope git_status<CR>", { desc = "telescope git status" })
keymap.set("n", "<leader>pt", "<cmd>Telescope terms<CR>", { desc = "telescope pick hidden term" })
keymap.set("n", "<leader>th", "<cmd>Telescope themes<CR>", { desc = "telescope nvchad themes" })
keymap.set("n", "<leader>ff", "<cmd>Telescope find_files<cr>", { desc = "telescope find files" })
keymap.set("n", "<leader>fa", "<cmd>Telescope find_files follow=true no_ignore=true hidden=true<CR>",
  { desc = "telescope find all files" })




