import random

HEX_CODE_CONSTANTS = "abcdef0123456789"


def generate_random_gradient(no_of_color):
    gradient = []

    for i in range(int(no_of_color)):
        color = "#"
        for i in range(6):
            rand_hex_char = HEX_CODE_CONSTANTS[random.randrange(
                0, len(HEX_CODE_CONSTANTS)-1)]
            color += rand_hex_char

        gradient.append(color)

    return gradient
