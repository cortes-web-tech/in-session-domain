APP_NAME = myApp
BUILD_DIR = ./bin
C_FILES = ./src/*.c


APP_DEFINES:= 
APP_INCLUDES:= -I./src/vendors/GLFW -framework Cocoa -framework OpenGL -framework IOKit
APP_LINKERS:= -L./src/vendors/GLFW/lib -lglfw3
# buildLibrary:
# clang $(LIB_C_FILES) $(LIB_DEFINES) -o $(BUILD_DIR)/lib$(LIB_NAME).dynamiclib $(LIB_LINKERS) $(LIB_INCLUDES)

# buildClient:
# clang $(APP_C_FILES) -o $(BUILD_DIR)/$(APP_NAME) $(APP_LINKERS) $(APP_INCLUDES)

# run: 
# $(BUILD_DIR)/$(APP_NAME)

build:
	clang $(C_FILES) -o $(BUILD_DIR)/$(APP_NAME) $(APP_LINKERS) $(APP_INCLUDES)
