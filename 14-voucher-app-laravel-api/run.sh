#!/bin/bash

cd /home/mkk/Desktop/SWD/exerciseReact/14-voucher-app-laravel-api
# echo "Running script..."
# Open two terminals
#gnome-terminal --title="Terminal 1" -- bash -c "npm run dev; exec bash"
#gnome-terminal --title="Terminal 2" -- bash -c "npm run api; exec bash"

tmux new-session -d -s my_session
# Split the window into two panes
#tmux split-window -h
# Run the first command in the first pane
tmux send-keys -t my_session:0.0 'npm run dev' C-m
# Run the second command in the second pane
#tmux send-keys -t my_session:0.1 'npm run api' C-m
# Attach to the tmux session so it runs in the foreground
tmux attach-session -t my_session

# tmux new-session -s mysession
# tmux split-window -h -t mysession
# tmux send-keys -t mysession:0.0 'npm run dev' C-m
# tmux send-keys -t mysession:0.1 'npm run api' C-m
# tmux attach -t mysession

# tmux split-window -h mysession
# tmux send-keys -t mysession:0.0 'npm run dev' C-m
# tmux send-keys -t mysession:0.1 'npm run api' C-m