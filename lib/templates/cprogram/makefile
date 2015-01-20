TARGET_NAME = cprog
TARGET_EXT = exe
BIN_DIR = ./bin
OBJ_DIR = ./obj
SRC_DIR = ./src
INC_DIR = ./inc
TARGET_PATH = $(BIN_DIR)/$(TARGET_NAME).$(TARGET_EXT)
CFLAGS = -Wall -Wextra -Werror
CP = gcc

all: fclean $(TARGET_NAME)
$(TARGET_NAME) : main.o
$(CP) \
$(OBJ_DIR)/main.o \
-o $(TARGET_PATH)

main.o:
$(CP) $(CFLAGS) -c $(SRC_DIR)/main.c -I$(INC_DIR) -o $(OBJ_DIR)/main.o

clean:
rm $(BIN_DIR)/*.exe
rm $(OBJ_DIR)/*.o

fclean:
rm -f $(BIN_DIR)/*.exe
rm -f $(OBJ_DIR)/*.o

run: all
echo Running $(TARGET_PATH) ...
$(TARGET_PATH) -c test
