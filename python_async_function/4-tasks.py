#!/usr/bin/env python3
""" The code is nearly identical to wait_n """
from typing import List
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int = 10) -> List[float]:
    """ The code is nearly identical to wait_n """
    list_float = [await task_wait_random(max_delay) for _ in range(n)]
    return sorted(list_float)
