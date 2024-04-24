#!/usr/bin/env python3
"""list of wait random returns"""
from typing import List

wait_random = __import__("0-basic_async_syntax").wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """storage the result in a List"""
    results = [await wait_random(max_delay) for _ in range(n)]
    return results
