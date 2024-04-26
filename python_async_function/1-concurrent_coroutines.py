#!/usr/bin/env python3
"""list with the funcion wait_random"""
from typing import List

wait_random = __import__("0-basic_async_syntax").wait_random


async def wait_n(n: int, max_delay: int = 10) -> List[float]:
    """wait_n should return the list of all the delays (float values)"""
    delays = [await wait_random(max_delay) for _ in range(n)]
    return sorted(delays)
