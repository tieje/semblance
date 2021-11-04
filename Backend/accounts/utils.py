from enum import Enum
'''utility functions for now'''

class ChoiceEnum(Enum):
    '''
    Helper for returning choices as a tuple of tuples
    Input:
    
    RED = 'RED'
    WHITE = 'WHITE'
    BLUE = 'BLUE'
    
    We want the output to look something like:
    
    (
        (RED, 'red'),
        (WHITE, 'white'),
        (BLUE, 'blue'),
    )
    '''
    @classmethod
    def choices(cls):
        return tuple((x.name, x.value) for x in cls)

